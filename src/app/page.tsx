
import Hero from "./_section/hero/page";
import Contact from "./_section/contact/page";
import Footer from "./_section/footer/page";
import Testimony from "./_section/testimony/page";
import About from "./_section/about/page";
import Solution from "./_section/solution/page";
import Why from "./_section/why/page";
import Insight from "./_section/insight/page";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero></Hero>

      {/* About */}
      <About></About>

      {/* Solution */}
      <Solution></Solution>

      {/* Why */}
      <Why></Why>

      {/* Testimony */}
      <Testimony></Testimony>

      {/* Insight */}
      <Insight></Insight>

      {/* Contact Us */}
      <Contact></Contact>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}
