import React from "react";
import Head from "next/head";
import ThreeDAnimation from "./components/ThreeDAnimation";
import TextSection from "./components/TextSection/TextSection";
import Projects from "./all-projects/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Animation and Text Demo</title>
      </Head>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <ThreeDAnimation />
      </div>
      <div style={{ height: "100vh" }}></div>
      <TextSection />
      <Projects />
    </>
  );
};

export default Home;
