import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Now = () => {
  const site = "https://willbowles.co";
  const canonicalURL = site + useRouter().pathname;
  return (
    <Layout>
      <Head>
        <title>What I'm Doing Now | Will Bowles</title>
        <meta name="description" content="What I'm doing now" />
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">What I am doing now.</h1>
        <div className=" text-lg">
          <p className="mt-5">
            It's March 22, 2022. I'm living in New York City.
          </p>
          <p className="mt-5">
            I completed the software engineering immersive at General Assembly
            on March 16, 2022. This website is my first project after graduating
            from the program. I'm using Next.js, and Tailwind CSS on the
            frontend and managing the essay content with Contentful, a headless
            cms.
          </p>
          <p className="mt-5">
            Now I'm learning different programming languages. I've started
            learning Typescript and how to write smart contracts with Solidity.
            Maybe I'll become a Web3 developer. It's still too early to tell.
            But after learning to program I feel there are more opportunities in
            different verticals that I can explore.
          </p>
          <p className="mt-5">
            There are other things I plan on learning such as machine learning
            and data science. I don't plan on becoming a data science. I just
            think machine learning and data science are interesting. I learned
            python in the immersive and most machine learning and data science
            models use python, so it learning those also feels like a great way
            for me to become more knowledgable of python.
          </p>
          <p className="mt-5">
            That's what I'm doing now. I hope to update this when I get my first
            job as a software engineer.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Now;
