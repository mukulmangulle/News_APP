import React, { useContext, useState } from 'react'
import NewsContext from './Context/news/NewsContext'
import { fetchNews } from './Context/news/NewsAction'


const Navbar = () => {

  const [text, setText] = useState("")
  const { dispatch } = useContext(NewsContext)

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchNews(text)
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
    setText("");
  };

  const handleTopic = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  }

  return (
    <nav className="navbar navbar-expand-lg  d-flex  align-items-center shadow-lg py-5 bg-black " style={{cursor:"pointer"}} >
      <div className="container-fluid">
        {/* <a className="navbar-brand fw-bold "style={{marginTop:"-80px"}} href="#">Kal Tak News</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-lg-0 ">

            <li className="nav-item text-center p-2">
              <i class="fa-solid fa-basketball fa-beat fa-2xl " style={{ color: "white" }}></i>
              <a className="nav-link active p-3  text-light " style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("sports")}>SPORTS</a>
            </li>

            <li className="nav-item text-center  p-2">
              <i class="fa-brands fa-centercode fa-beat fa-2xl" style={{ color: "white" }}></i>
              <a className="nav-link active p-3 text-light" style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("Entertainment")}> ENTERTAINMENT</a>
            </li>

            <li className="nav-item text-center  p-2">
              <i class="fa-solid fa-briefcase fa-beat fa-2xl" style={{ color: "white" }}></i>
              <a className="nav-link active p-3 text-light" style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("Business")}>BUSINESS</a>
            </li>

            <li className="nav-item text-center  p-2">
              <i class="fa-solid fa-photo-film fa-beat fa-2xl" style={{ color: "white" }}></i>
              <a className="nav-link active p-3 text-light" style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("Socal-media")}>SOCIAL-MEDIA</a>
            </li>

            <li className="nav-item text-center  p-2">
              <i class="fa-solid fa-user-graduate fa-beat fa-2xl" style={{ color: "white" }}></i>
              <a className="nav-link active p-3 text-light" style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("Education")}>EDUCATION</a>
            </li>

            <li className="nav-item text-center  p-2">
              <i class="fa-solid fa-life-ring fa-beat fa-2xl" style={{ color: "white" }}></i>
              <a className="nav-link active p-3 text-light" style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("Life & style")}>LIFE & STYLE</a>
            </li>

            <li className="nav-item  text-center  p-2">
              <i class="fa-solid fa-memory fa-beat fa-2xl" style={{ color: "white" }}></i>
              <a className="nav-link active p-3 text-light" style={{ fontSize: "13px" }} aria-current="page" onClick={() => handleTopic("Tychnology")}>TECHNOLOGY</a>
            </li>


          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2 rounded-2" type="search"
              placeholder="Search" aria-label="Search"
              onChange={(e) => setText(e.target.value)}
              value={text} />
            <button className="btn btn-success rounded-2" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    // 

  )
}

export default Navbar