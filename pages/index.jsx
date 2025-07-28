// Core Imports
import { Fragment } from 'react';
import Head from 'next/head';

// Custom Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import Facts from 'components/Facts';

const Home = () => {
  return (
    <Fragment>
      {/* Scroll Progress Bar */}
      <PageProgress />

      {/* SEO Meta Tags */}
      <Head>
        <title>FreightEdge – React & Next.js Template for Freight Forwarding</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://www.freightedge.com/" />
      </Head>

      {/* Main Page Content */}
      <main className="content-wrapper overflow-x-hidden">

        {/* Hero Banner */}
        <Hero />

        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Freight Shipping Company"
              para="‘FreightEdge LLC’"
              para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque quae, vitae sed fugiat facere voluptas! Odio quam debitis incidunt corporis, praesentium numquam voluptate eius nihil cum qui, voluptatem facilis. Id laborum tenetur deserunt eius voluptate nam accusantium inventore repellendus natus mollitia debitis et numquam voluptatibus nihil harum."
              para3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque quae, vitae sed fugiat facere voluptas! Odio quam debitis incidunt corporis, praesentium numquam voluptate eius nihil cum qui, voluptatem facilis. Id laborum tenetur deserunt eius voluptate nam accusantium inventore repellendus natus mollitia debitis et numquam voluptatibus nihil harum, vero praesentium atque."
              imgPosition="right"
              src="/img/about.webp"
              btnTitle="Read More"
              btnUrl="#"
            />
          </div>
        </section>

        {/* Facts / Metrics Section */}
        <Facts />
      </main>
    </Fragment>
  );
};

export default Home;
