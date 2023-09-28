import React, { useState, useEffect } from "react";
import BarChart from "./Components/Chart";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [chartData, setChartData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const override = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: "auto",
    inset: 0,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(
          "https://api.llama.fi/summary/fees/lyra?dataType=dailyFees"
        );
        const res = await resp.json();
        setChartData(res);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage("Could not Load Data!!");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isloading) {
    return (
      <div>
        <ScaleLoader
          color="black"
          loading={isloading}
          size={80}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (errorMessage) {
    return <h1 className="error">{errorMessage}</h1>;
  }
  return <BarChart chartData={chartData.totalDataChart} />;
}

export default App;
