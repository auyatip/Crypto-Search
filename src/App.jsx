import { useState, useEffect } from "react";
import Coin from "./coin";
import "./App.css";
import axios from "axios";


function App() {
  const [cyptoData, setCyptoData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=thb&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      setCyptoData(res.data);
    };
    getData();
  }, []);

  const filteredCoin = cyptoData.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(cyptoData);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl m-5 text-orange-400 underline">Search The currency</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg bg-blue-900 p-2 m-4 w-[300px]"
              onChange={(e)=>setSearch(e.target.value)}
            />
          </form>
        </div>
        {filteredCoin.map((coin) => {
          return (<Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume ={coin.total_volume}
          />
        )})}
      </div>
    </>
  );
}

export default App;
