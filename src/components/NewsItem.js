import React from 'react'

const NewsItem = (props)=> {
   
    
    
        let { title, description, imageUrl, newsUrl, author, date } = props
        return (
            <div className={`my-2 text-${(props.color==="dark")?"white":"dark"} bg-${props.color} bg-body-${props.color}`}>
                <div className={` card my-2 text-${(props.color==="dark")?"white":"dark"} bg-${props.nav} bg-body-${props.color}`} style={{width: "18rem",}}>
                <img src={!imageUrl?"https://www.fda.gov/files/CDER-whatsnew.png":imageUrl} className="card-img-top" alt="..." />
                <div className={` card-body my-2 text-${(props.color==="dark")?"white":"dark"} bg-${props.nav} bg-body-${props.color}`}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"Unknown": author} on {new Date (date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>
                </div>
            </div>
      </div >
    )
    
}

export default NewsItem