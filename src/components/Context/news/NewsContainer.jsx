
import NewsCard from './NewsCard'
import { useContext, useEffect } from 'react'
import NewsContext from './NewsContext'
import { fetchNews } from './NewsAction'


const NewsContainer = () => {
 
  const {allNews, dispatch}= useContext(NewsContext)

 const getNews=async()=>{
  const data=await fetchNews("Indore");
   dispatch({
     type:"GET_NEWS",
     payload:data,
   });
 }

  useEffect(()=>{
     getNews('indore');
  },[])

  if (allNews.length ===0){
    return(
      <h1 className='text-center'>Loading...</h1>
    )
   
  }

  return (
       <div className=' row  w-100  w-100 grid gap-3' >
         {
          allNews.map((news, index)=> <NewsCard  key={index} news={news}/>)
         }
        
         
       </div>
  )
}

export default NewsContainer;