import Head from "next/head";
import Layout from "../../components/Layout";
import * as contentful from "contentful";
import Link from "next/link";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const Blog = ({ blogs }) => {
  return (
    <Layout>
      <Head>
        <title>Essays | Will Bowles</title>
        <meta name="description" content="Essays" />
      </Head>
      <main className="h-screen">
        <h1 className="text-3xl font-bold">Essays</h1>
        {blogs.map((blog) => (
          <div key={blog.sys.id} className="mt-8">
            <h4 className="text-xl font-bold">{blog.fields.title}</h4>
            <p className="prose mb-2 dark:prose-invert">
              {blog.fields.description}
            </p>
            <Link href={`/blog/${blog.fields.slug}`} passHref>
              <button className="bg-indigo-500 hover:bg-indigo-800 p-1 rounded text-white">
                Read Essay
              </button>
            </Link>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const blog = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogs: blog.items,
    },
  };
}
