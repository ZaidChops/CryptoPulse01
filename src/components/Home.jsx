import React, { useContext, useEffect } from "react";
import ListItems from "./ListItems";
import { useSelector } from "react-redux";

const Home = () => {
  const { coins, isError, isLoading, isSuccess } = useSelector(
    (state) => state.coins
  );
  // console.log(coins[0].item.coin_id)

  // const {displayCoin}=useContext(CoinContext)
  // console.log(displayCoin)

  // useEffect(()=>{
  //   displaydata()
  // // },[])

  // if (isError) {
  //   return <h1>Something went wrong!</h1>;
  // }

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (data.length === 0) {
  //   return <h1>No coins data yeat</h1>;
  // }

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#49654E",
          // height: "100vh",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "white", padding: "20px 30px 0px 30px" }}>
          Current assets
        </h3>
        <ul className="list-group">
          {
            coins.map((coin) => {
              return <ListItems key={coin.item.coin_id} coin={coin} />;
            })
            // displayCoin.map((coin,i)=>{
            // console.log(coin.item.coin_id)
            // return <ListItems key={coin.item.coin_id} coin={coin.item} />
            // })
          }
          {/* <ListItems /> */}
        </ul>
      </div>
    </>
  );
};

export default Home;
