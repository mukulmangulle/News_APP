import React from 'react'
import Navbar from './components/Navbar'
import { NewsProvider } from './components/Context/news/NewsContext'
import { QuoteProvider } from './components/Context/quote/quoteContext.jsx'
import WeatherCard from './components/Context/weather/WeatherCard.jsx'
import TrendingNews from './components/Context/quote/TrendingNews.jsx'
import { Weatherprovider } from './components/Context/weather/WeatherContext.jsx'
import Topbar from './components/Topbar.jsx'
import NewsContainer from './components/Context/news/NewsContainer.jsx'
import Imgsection from './Imgsection.jsx'

import { CoinProvider } from './components/Context/coin/CoinContext.jsx'
import Home from './components/Context/coin/Home.jsx'




const App = () => {
  return (
       <NewsProvider>
             <Topbar />

         <QuoteProvider>
               <TrendingNews />
          </QuoteProvider>
          <Navbar />

          <div className='container p-4 '>
                <Weatherprovider>

                                 <div className=' d-flex '>
                                        <WeatherCard />
                       <CoinProvider>
                           <Home/>
                        </CoinProvider>
                     </div>
        </Weatherprovider>
        </div>
        <Imgsection />
        <div className='row container-fluid  ' style={{marginLeft:"4px"}} >
          <NewsContainer />
        </div>
    

    </NewsProvider>
  )
}

export default App;