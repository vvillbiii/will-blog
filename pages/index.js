import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Will Bowles Software Engineer</title>
          <meta name="description" content="Homepage" />
        </Head>

        <main className="h-screen">
          <h1 className="text-4xl font-bold mt-2">
            Hi, my name is Will. <br />I am a Software Engineer in New York
            City.
          </h1>
          <p className="mt-3 text-lg">
            I worked in SEO, and digital marketing before becoming a software
            engineer. Finding new ways to solve problems and learning new skills
            are interests of mine. In addition to solving problems
            independently, I value collaboration because there is more than one
            way to achieve an answer, and everyone’s input is valuable. My
            strengths are my attention to detail and my ability to meet
            deadlines.
          </p>
        </main>
      </div>
    </Layout>
  );
}
