import Head from "next/head";
import Layout from "../../components/Layout";

const BlogDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Essay title | Will Bowles</title>
        <meta name="description" content="What I'm doing now" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">Essay title</h1>
      </main>
    </Layout>
  );
};

export default BlogDetails;
