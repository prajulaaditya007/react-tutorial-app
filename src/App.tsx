import React, { useState } from "react";
import SearchBar from "./SearchBar";
import DataTable from "./DataTable";
import { css, Global } from "@emotion/react";
import "./App.css";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Fruits", price: "$3", stocked: true, name: "Pineapple" },
  { category: "Fruits", price: "$5", stocked: false, name: "Strawberry" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "$0.5", stocked: true, name: "Potato" },
  { category: "Vegetables", price: "$3", stocked: false, name: "Tomato" },
];

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text: string, showStocked: boolean) => {
    let filteredItems = data;
    if (text) {
      filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    if (showStocked) {
      filteredItems = filteredItems.filter((item) => item.stocked);
    }
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <Global
        styles={css`
          body {
            font-family: Arial, sans-serif;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th,
          td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          th {
            background-color: #f2f2f2;
          }
          tr:nth-of-type(odd) {
            background-color: #f2f2f2;
          }
          tr[stocked="false"] {
            color: red;
          }
        `}
      />
      <SearchBar onSearch={handleSearch} />
      <DataTable items={filteredData} />
    </div>
  );
};

export default App;
