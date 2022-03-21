import Head from "next/head";
import Layout from "../../components/Layout";
const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Essays | Will Bowles</title>
        <meta name="description" content="Essays" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">Essays</h1>
      </main>
    </Layout>
  );
};

export default Blog;
