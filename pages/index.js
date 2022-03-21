import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Will Bowles Software Engineer</title>
          <meta name="description" content="Homepage" />
        </Head>

        <main>
          <h1 className="text-3xl font-bold">
            Hi, my name is Will, and I am a Software Engineer.
          </h1>
        </main>
      </div>
    </Layout>
  );
}
