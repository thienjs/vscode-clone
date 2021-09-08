import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="thien tran is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="thien, thien tran, ranganath, web developer, thien web developer, thien developer, mern stack, thien portfolio, jamstack developer"
      />
      <meta property="og:title" content="Thien Tran's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio-v1.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'thien tran',
};
