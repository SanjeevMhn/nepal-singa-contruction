import ContactUs from "./(components)/ContactUs";
import Experience from "./(components)/Experience";
import Hero from "./(components)/Hero";
import Machinery from "./(components)/Machinery";
import Projects from "./(components)/Projects";
import Testimonials from "./(components)/Testimonials";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Hero />
      <Experience />
      <Projects />
      <Machinery />
      <ContactUs />
      <Testimonials />
    </main>
  );
}
