import React from 'react'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'
import { NewsProvider } from './components/Context/news/NewsContext'
import { QuoteProvider } from './components/Context/quoteContext.jsx'
import WeatherCard from './components/Context/weather/WeatherCard.jsx'
import TrendingNews from './components/Context/TrendingNews.jsx'
import { Weatherprovider } from './components/Context/weather/WeatherContext.jsx'

const App = () => {
  return (
    <NewsProvider>
      <Navbar />

      <QuoteProvider>
        <TrendingNews />
      </QuoteProvider>
      
      <div className='container p-5 '>
        <Weatherprovider>
          <WeatherCard />
        </Weatherprovider>


        <div className='row'>

          <NewsContainer />
        </div>
      </div>

    </NewsProvider>
  )
}

export default App