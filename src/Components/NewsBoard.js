import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const[articles,Setarticles] = useState([])
  useEffect(()=>{
    let url  = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2c57056ac790416c978ea812cc50c155`;
    fetch(url).then(response=>response.json()).then(data=> Setarticles(data.articles));

  },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span class="badge text-bg-secondary">News</span></h2>
      {articles.map((news,index)=>{
        return<NewsItem key={index} title={news.title} description={ news.description} src={news.urlToImage} url= {news.url}/>


      })}
    </div>
  );
}

export default NewsBoard;
