import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BreadCrumbs from "../components/Post/BreadCrumbs";
import PageProgress from "../components/Post/PageProgress";
import PostContent from "../components/Post/PostContent";
import RelatedPosts from "../components/Post/RelatedPosts";
import StandWithUkraine from "../components/StandWithUkraine";

const Post: NextPage = () => (
  <>
    <Head>
      <title>AlexCode - BlogPost</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <StandWithUkraine />
    <Header />
    <BreadCrumbs />
    <PageProgress />
    <section className="blogpost-section">
      <div className="container">
        <div className="blogpost-outer">
          <PostContent />
          <RelatedPosts />
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Post;
