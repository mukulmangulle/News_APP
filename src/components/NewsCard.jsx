import React from 'react'



const NewsCard = ({news}) => {
    return (

        <div class="card mb-3 rounded-0 shadow-sm" >
            <div class="row g-0">
                <div class="col-md-4 rounded-0 d-flex algin-item-center ">
                    <img class="p-2 rounded-0 img-fluid"
                     src={news.urlToImage} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{news.title}</h5>
                        <p class="card-text">{news.description}</p>
                        <p class="card-text"><small class="text-body-secondary">{news.author}</small></p>
                        <a target="_blank" href={news.url} class="btn btn-primary float-end  rounded-0 my-3">Read Full News</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard