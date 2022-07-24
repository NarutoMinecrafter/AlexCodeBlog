import type { NextPage } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Pagination from "@/components/Pagination";
import Posts from "@/components/Posts";
import StandWithUkraine from "@/components/StandWithUkraine";
import Tags from "@/components/Tags";

const Home: NextPage = () => (
  <>
    <Head>
      <title>AlexCode</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <StandWithUkraine />
    <Header />
    <Intro />
    <section className="simple-section">
      <div className="container">
        <Tags />
        <Posts />
        <Pagination />
      </div>
    </section>
    <Footer />
  </>
);

export default Home;
