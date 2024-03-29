import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country : "in",
        pagesize : 5,
        category : "general"
    }
    static propTypes = {
        country : PropTypes.string,
        pagesize : PropTypes.number,
        category : PropTypes.string
    }

constructor(props){
    super(props);
    // console.log("hello from constructor from new component")
    this.state = {
        articles: [],
        loading: false,
        page: 1
    }
    document.title = (this.props.category.slice(0,1)).toUpperCase() + this.props.category.slice(1,this.props.category.length)
}
async UpdateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&&category=${this.props.category}&apiKey=d7c75f50e6434292b70390f4a09279d2&pageSize=${this.props.pagesize}`;
    this.setState({loading : true,})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults,loading : false,})
    console.log(parsedData)
}
async componentDidMount(){
   this.UpdateNews()
}

handleNextClick = async () =>{
    this.UpdateNews()
    this.setState({page: this.state.page + 1})
}
handlePreClick = async () =>{
    this.UpdateNews()
    this.setState({page: this.state.page - 1})

}

    render() {
        return (
            <div className='container my-3' >
                <h2 className='text-center' >NewsSpace - Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                  return  <div className="col-md-4 my-4" key ={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                    </div>   
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" onClick={this.handlePreClick} class="btn btn-primary">&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" onClick={this.handleNextClick} className="btn btn-primary">Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News