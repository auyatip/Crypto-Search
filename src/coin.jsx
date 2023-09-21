//import './coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange,marketcap }) => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center border-b items-center h-[80px] w-[900px]">
        <div className="flex items-center pr-24 min-w-[300px]">
          <img src={image} alt="crypto" className="h-[30px] w-[30px] mr-3"/>
          <h1 className="font-[16px] w-[150px]">{name}</h1>
          <p className="uppercase">{symbol}</p>
        </div>
        <div className="flex flex-row text-right justify-between w-[100%]">
          <p className="w-[100px]">&{price}</p>
          <p className="w-[100px]">&{volume.toLocaleString()}</p>
          {/* เช็คราคา + - ต่อวัน */}
          {priceChange < 0 ? (
            <p className="w-[100px] text-red-400">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="w-[100px] text-green-400">{priceChange.toFixed(2)}%</p>
          )}
          
          <p className="w-[220px]">
              Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
