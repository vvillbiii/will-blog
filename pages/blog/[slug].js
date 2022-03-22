import Head from "next/head";
import Layout from "../../components/Layout";
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const BlogDetails = ({ blogs }) => {
  return (
    <Layout>
      <Head>
        <title> {blogs.fields.title} | Will Bowles</title>
        <meta name="description" content={blogs.fields.description} />
      </Head>
      <main>
        <h1 className="text-3xl font-bold mt-4">{blogs.fields.title}</h1>
        <div className="post-body my-5 prose prose-lg dark:prose-invert">
          {documentToReactComponents(blogs.fields.essay)}
        </div>
      </main>
    </Layout>
  );
};

export default BlogDetails;

export async function getStaticPaths() {
  const allBlogs = await client.getEntries({ content_type: "blogPost" });

  const paths = allBlogs.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false, // true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const blog = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: {
      blogs: blog.items[0],
    },
  };
}
