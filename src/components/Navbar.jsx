import React, { useCallback, useContext, useState } from 'react'
import NewsContext from './Context/news/NewsContext'
import { fetchNews } from './Context/news/NewsAction'

const Navbar = () => {

  const [text, setText] =useState("")
   const{dispatch}=useContext(NewsContext)

  const handleSearch = async(e)=>{
    e.preventDefault();
    const data= await fetchNews(text)
    dispatch({
      type :"GET_NEWS",
      payload:data,
    });
     setText("");
  };

  const handleTopic = async(topic)=>{
    const data = await fetchNews(topic);
    dispatch({
      type :"GET_NEWS",
      payload:data,
    });
  }

  return (
    <nav class="navbar navbar-expand-lg  shadow-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">AVP NEWS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("sports")}>Sport</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("Entertainment")}>Entertainment</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("Business")}>Business</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("Socal-media")}>Socal-media</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("Education")}>Education</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("Life & style")}>Life & style</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" onClick={()=>handleTopic("Tychnology")}>Tychnology</a>
          </li>
         
         
         
        </ul>
        <form class="d-flex" role="search" onSubmit={handleSearch}>
          <input class="form-control me-2 rounded-0" type="search"
           placeholder="Search" aria-label="Search"
           onChange={(e)=> setText(e.target.value)}
           value={text}/>
          <button class="btn btn-success rounded-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar