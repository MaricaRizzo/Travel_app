"use client";
import DestinationList from "./components/DestinationList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);

  return (
    <div>
      <Header />

      <main>
        <SearchBar query={query} setQuery={setQuery} setCities={setCities} />
        <DestinationList cities={cities} />
      </main>

      <Footer />
    </div>
  );
}
