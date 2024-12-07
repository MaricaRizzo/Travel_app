import DestinationList from "./components/DestinationList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <SearchBar />
        <DestinationList />
      </main>

      <Footer />
    </div>
  );
}
