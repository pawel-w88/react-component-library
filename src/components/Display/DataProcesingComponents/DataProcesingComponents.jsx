import React from "react";
import { DataTable, DataVisualization, Filters, Pagination, SearchBar } from "../..";
import "./DataProcesingComponents.scss";

export const DataProcesingComponents = () => {
  // Data Procesing
  const columns = ["ID", "Nazwa", "Cena"];
  const data = [
    [1, "Produkt 1", 10],
    [2, "Produkt 2", 20],
    [3, "Produkt 3", 30],
  ];

  const totalPages = 5;
  const currentPage = 1;

  const onPageChange = (page) => console.log("Zmiana strony:", page);

  const filters = ["Nazwa", "Cena"];

  const onFilterChange = (filter, value) =>
    console.log("Zmiana filtra:", filter, value);

  const onSearch = (query) => console.log("Wyszukiwanie:", query);
  return (
    <div className="DataProcesingComponents ">
      <h2>Data Procesing </h2>
      <DataTable columns={columns} data={data} />
      <DataVisualization data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={onPageChange}
      />
      <Filters filters={filters} onChange={onFilterChange} />
      <SearchBar onChange={onSearch} />
    </div>
  );
};
