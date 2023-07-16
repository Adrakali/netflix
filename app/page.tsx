import Hero from "./components/Hero";
import Row from "./components/Row";

export default function Home() {
  return (
    <>
      <Hero />
      <Row title="Popular" url="popular" />
      <Row title="Upcoming" url="upcoming" />
      <Row title="Top rated" url="top_rated" />
    </>
  );
}
