import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_PAGE = 10;

  const getData = useCallback(async (page) => {
    setLoading(true);
    const resp = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=${page}&limit=10`
    );
    const data = await resp.json();
    setData(data.coins);
    setLoading(false);
  }, []);

  useEffect(() => {
    const intial = 0;
    getData(intial);
  }, [getData]);

  const filterdData = data.filter((elem) => {
    return elem.name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
  });

  const handlePages = (num) => {
    const pagePerCoin = ITEMS_PER_PAGE * num - 10;
    if (num === 1) {
      num = 0;
      getData(pagePerCoin);
    }
    getData(pagePerCoin);
  };

  return (
    <div className="App">
      <Header setInput={setInput} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          {filterdData.map((elem, key) => (
            <Card key={key} elem={elem} />
          ))}
        </div>
      )}

      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem 0",
          position: "relative",
          bottom: "0rem",
          left: "0%",
        }}
      >
        {input.length === 0 &&
          new Array(5).fill(0).map((_, idx) => (
            <span
              key={idx}
              onClick={() => handlePages(idx + 1)}
              style={{
                padding: "0.5rem 1rem",
                background: "#333",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {idx + 1}
            </span>
          ))}
      </div>
    </div>
  );
}

export default App;
