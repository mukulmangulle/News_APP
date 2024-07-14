import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CoinContext from './CoinContext'

import getCoinDetails from './Home/'

const CoinPage = () => {

  const { dispatch, coinData } = useContext(CoinContext)

  const params = useParams();

  const fetchCoinData = async () => {
    const data = await getCoinDetails(params.coinId)
    dispatch({
      type: "COIN_DETAILS",
      payload: data,
    })
  }


  useEffect(() => {
    fetchCoinData();
  }, []);

  if (!coinData) {
    return (<Container>
      <LinearProgress style={{ backgroundColor: "orange" }} />
    </Container>
    );
  }

  return (
    <div>
      <div className='h4'>{coinData.name}</div>
        </div>
  )
}

export default CoinPage;