import React from 'react'
// import Loading from "../loading.gif"

const Spinner = ()=> {

        return (
            <div className="my-3 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    
}
export default Spinner;
