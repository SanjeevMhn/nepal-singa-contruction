import Experience from "./(components)/Experience";
import Hero from "./(components)/Hero";
import Machinery from "./(components)/Machinery";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Hero />
      <Experience />
      <Machinery />
    </main>
  );
}
