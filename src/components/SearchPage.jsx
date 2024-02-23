import React, { useContext } from 'react'
import SearchList from './SearchList'
import CoinContext from './context/coin/CoinContext'

const SearchPage = () => {

    // const {coins}=useContext(CoinContext)
    // console.log(coins)

    // if(!coins || coins.length === 0){
    //     return <h1 style={{ backgroundColor: "#93B1A6", height:"100vh",marginTop:"50px",textAlign:"center" }}>No coins data yeat</h1>
    //   }

  return (
    <>
       <div className="container" style={{backgroundColor:"#183D3D", height:"auto",marginTop:"20px",borderRadius:"10px"}}>
        <h3 style={{color:"white",padding:"20px 30px 0px 30px"}}>All Results</h3>
        <ul className='list-group'>
            {/* {
                coins.map(coin => <SearchList key={coin.id} coin={coin}  /> 
                )
                coins.map((coin,i)=>{
                    console.log(coin.coins.coin_id)
                    return <SearchList key={coin.coins.id} coin={coin.item} />
                })
            } */}
            <SearchList/>
        </ul>
      </div>
    </>
  )
}

export default SearchPage
