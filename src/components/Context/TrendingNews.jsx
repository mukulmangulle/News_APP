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
      <marquee className="display-6 my-3 " >{quoteData.content}</marquee>
    </>
  );
};

export default TrendingNews