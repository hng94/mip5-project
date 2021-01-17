import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PopularList from "../components/PopularList";
import TagList from "../components/TagList";

export default function Home() {
  const cards = [...new Array(5).fill({})].map(() =>
    Math.floor(Math.random() * 1000)
  );
  return (
    <>
      <div className="grid grid-cols-4 space-x-6">
        <FilterBar />
        <div className="col-span-3">
          <div className="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((value, index) => (
              <Card key={index} />
            ))}
          </div>
          <div className="mt-4 text-center text-white rounded bg-red-400 cursor-pointer px-3 py-2 transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-red-500">
            Show more
          </div>
        </div>
      </div>
    </>
  );
}
