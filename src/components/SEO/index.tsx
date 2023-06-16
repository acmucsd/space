import Head from 'next/head';

const SEO: React.FC = () => {
  return (
    <Head>
      {/* google indexing data */}

      <title>Space 2023</title>
      <meta name="description" content="ACM at UCSD's Annual Career Fair" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* link sharing data */}

      {/* page url to be used as permanent id */}
      <meta property="og:url" content="https://space.acmucsd.com/" />
      {/* type of content */}
      <meta property="og:type" content="website" />
      {/* actual website title */}
      <meta property="og:site_name" content="Space 2022" />
      {/* title to display for the specific link being shared */}
      <meta property="og:title" content="SPACE 2022" />
      {/* preview description text */}
      <meta property="og:description" content="ACM at UCSD's Annual Career Fair" />

      {/* <meta property="twitter:card" content="summary" />
     <meta property="twitter:creator" content={config.social.twitter} />
     <meta property="twitter:title" content={title} />
     <meta property="twitter:description" content={description} /> */}
    </Head>
  );
};

export default SEO;
