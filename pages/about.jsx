const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>hello world.</p>
      <p>I'm a self taught web developer. I have learned through online courses such as freecodecamp, udemy, and youtube. The best place to learn about the web is on the web.</p>
      <p>Besides coding, my other hobbies include tennis, skateboarding, guitar, and watch collecting. Get to know me more on my blog.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
