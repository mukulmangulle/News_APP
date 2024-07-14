import React, { useContext, useEffect } from 'react'
import { getQuote } from './quoteAction.jsx'
import QuoteContext from './quoteContext.jsx';




const TrendingNews = () => {

  const { dispatch, quoteData } = useContext(QuoteContext)
  const fetchQuote = async () => {
    const data = await getQuote()

    dispatch({
      type: "GET_QUOTE",
      payload: data,
    })

  }
  

  useEffect(() => {
    fetchQuote();
  }, []);

  if (!quoteData) {
    return ( 
      <h1 className='text-center'>Loading...</h1>
    )
  }

  return (
    <>
     <div id='trending' className='container-fluid' style={{backgroundColor:"#ff2143"}}>
     <div className=' container  text-light ' style={{backgroundColor:"#ff2143"}}>
      <marquee className=" h3 d-flex p-3  " >{quoteData.content}</marquee>
      </div>
     </div>
    </>
  );
};

export default TrendingNews