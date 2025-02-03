import React, { useState } from "react";
import { HttpRequest } from "../../ServerCommunicate/HttpRequest/HttpRequest";
import {
  DataCache,
  DisplayData,
} from "../../ServerCommunicate/DataCache/DataCache";
import { ErrorHandler } from "../../ServerCommunicate/ErrorHandler/ErrorHandler";
import "./ServerCommunicateComponents.scss";

export const ServerCommunicateComponents = () => {
  const [data, setData] = useState(null);
  const [cachedData, setCachedData] = useState(null);
  const handleSuccess = (fetchedData) => {
    setData(fetchedData);
    console.log("Sukces!", fetchedData);
    // Tutaj możesz dodać kod obsługi sukcesu, np. aktualizację stanu komponentu lub przekazanie danych dalej
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      <ErrorHandler error={error} />;
      throw error;
    }
  };
  const handleDataFetched = (data) => {
    // Obsługa danych pobranych z DataCache, ustawienie ich w stanie
    setCachedData(data);
  };

  return (
    <div className="ServerCommunicateComponents ">
      <h2>Server Communicate</h2>
      <HttpRequest
        url="https://jsonplaceholder.typicode.com/posts/"
        method="GET"
        onSuccess={handleSuccess}
        onError={console.error}
      />
      {data && <DisplayData data={data} />}

      <DataCache fetchData={fetchData} onDataFetched={handleDataFetched} />
      {cachedData && (
        <div>
          <h3>Dane z DataCache:</h3>
          <DisplayData data={cachedData} />
        </div>
      )}
    </div>
  );
};
