import React, { useContext } from 'react'
import CardIteam from './CardIteam'
import CoinContext from './CoinContext';

const CardContainer = () => {
 
     const {coins}=useContext(CoinContext);

     if(!coins || coins.length === 0){
        return(
            <div className='h2 ' style={{display:"flex" ,alignItems:'center' , justifyContent:'center' }}> No Coins Data Yet</div>
        )
     }

    return (
        <div className='container grid-gap-5  '  style={{ marginTop: '10px', overflow:"scroll", overflowX:"hidden"}}>
          {
            coins.map(coin=> <CardIteam key={coin.id} coin={coin}/>)
          }
        </div>
    )
}

export default CardContainer