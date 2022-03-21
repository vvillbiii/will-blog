import Head from "next/head";
import Layout from "../components/Layout";

const Now = () => {
  return (
    <Layout>
      <Head>
        <title>What I'm Doing Now | Will Bowles</title>
        <meta name="description" content="What I'm doing now" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">What I am doing now.</h1>
      </main>
    </Layout>
  );
};

export default Now;
