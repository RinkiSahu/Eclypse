import React from "react";
import { useData } from "../context/DataContext";

const DataComponent = () => {
  const { data, loading, error } = useData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;