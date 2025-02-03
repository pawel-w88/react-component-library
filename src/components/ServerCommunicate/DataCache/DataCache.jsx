import React, { useState, useEffect } from "react";
import { Spinners } from "../../ToolComponents/Spinners/Spinners";
import "./DataCache.scss";

export const DisplayData = ({ data }) => {
  return (
    <div>
      {data && (
        <ul>
          {data.map((data) => (
            <li key={data.id}>{data.title} {data.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const DataCache = ({ fetchData, onDataFetched }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndUpdateCache = async () => {
      try {
        const response = await fetchData();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
        setLoading(false);
      }
    };

    fetchDataAndUpdateCache();
  }, [fetchData, onDataFetched]);

  return (
    <>
      {loading ? <Spinners /> : <>{data && <DisplayData data={data} />}</>}
    </>
  );
};
