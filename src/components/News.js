import React, { Component,useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    document.title ="NewsSpace - " + (props.category.slice(0,1)).toUpperCase() + props.category.slice(1,props.category.length);

const  UpdateNews= async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
}
useEffect(() => {
  UpdateNews()
}, [])

// const  componentDidMount= async ()=>{
//    this.UpdateNews()
// }

// const handleNextClick = async () =>{
//     this.UpdateNews()
//     this.setState({page: this.state.page + 1})
// }
// const handlePreClick = async () =>{
//     this.UpdateNews()
//     this.setState({page: this.state.page - 1})

// }
const fetchMoreData = async ()=>{
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
}

 
        return (
            <>
                <h2 className='text-center' >NewsSpace - Top Headlines</h2>
        
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length != totalResults}
                loader={<Spinner/>}
                >
        
                <div className="container" >
                <div className="row">
                {articles.map((element)=>{
                    return  <div className="col-md-4 my-4" key ={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                    </div>   
                })}
                
                </div>
                </div>

                </InfiniteScroll>
                </>
            

        )
    
}
News.defaultProps = {
    country : "in",
    pagesize : 5,
    category : "general"
}
News.propTypes = {
    country : PropTypes.string,
    pagesize : PropTypes.number,
    category : PropTypes.string
}

export default News