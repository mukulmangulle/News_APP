import React from "react"


const NewsCard = ({ news }) => {
  return (

    <div className=" col-6 card   rounded-2 shadow-sm  " style={{ width: "242px", marginLeft: "5px" }}>
      <div className="">
        <img className="p-0 rounded-0 img-fluid" style={{}}
          src={news.urlToImage} />
      </div>
      <div class="card-body">
        <h5 class="card-title pb-3">{news.title}</h5>
        <p class="card-text">{news.description}</p>
        <p className="card-text"><small className="text-body-secondary">{news.author}</small></p>
        <a target="_blank" href={news.url} className="btn btn-dark  rounded-2  my-3" id="read">Read Full News</a>
      </div>
    </div>

  )
}

export default NewsCard