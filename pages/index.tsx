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
  return (
    <>
      <Nav />
      <div className="container mx-auto p-6 max-w-screen-xl grid grid-cols-3 space-x-6">
        <div className="relative space-y-4 col-span-2">
          <FilterBar />
          <div className="grid grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
          <div className="text-red-400 w-40 text-center mx-auto rounded-md py-2 text-sm cursor-pointer uppercase border transition duration-300 ease-in-out transform border-red-400 hover:bg-red-400 hover:text-white">
            Show more
          </div>
        </div>
        <div className="">
          <PopularList />
        </div>
      </div>
    </>
  );
}
