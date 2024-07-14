import React from 'react'

const CardIteam = ({ coin }) => {
    return (
        <div className='' >


            <div className=' p-5 ' style={{ background: "orange", color: 'white' }}>
               
                    <div className=' m-3 ' style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between ' }}>
                        <div className='h2'>
                            {coin.symbol}
                        </div>
                        <img src={coin.large} alt="WeatherImage" className='img-fluid' style={{ width: "50px" }} />
                 
                    </div>
                    <button className="w-100  border-0 bg-success">Learn More</button>
                </div>
              </div>
     
    )
}

export default CardIteam;