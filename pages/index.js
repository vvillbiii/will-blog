import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Will Bowles Software Engineer</title>
          <meta
            name="description"
            content="Will Bowles website. New York City based software engineer. "
          />
        </Head>

        <main>
          <h1 className="text-4xl font-bold mt-2">
            Hi, my name is Will. <br />I am a Software Engineer in New York
            City. 👨🏾‍💻
          </h1>
          <p className="mt-3 text-lg">
            As a full-stack developer, I have a wide range of skills and
            experience that I can bring to your company. I have experience with
            both front-end and back-end development, as well as experience with
            a variety of programming languages and frameworks such as
            JavaScript, Python, React, and Next.
          </p>
          <p className="mt-3 text-lg">
            Before becoming a full-stack developer I worked in SEO, and digital
            marketing.
          </p>
          <p className="mt-3 text-lg">
            I am a quick learner and have a knack for problem-solving, which
            makes me an asset on any development team.
          </p>
          <p className="mt-3 text-lg">
            In addition to solving problems independently, I value collaboration
            because there is more than one way to achieve an answer, and
            everyone’s input is valuable. My strengths are my attention to
            detail and my ability to meet deadlines.
          </p>
        </main>
      </div>
    </Layout>
  );
}
