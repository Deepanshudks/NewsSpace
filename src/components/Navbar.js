import React from 'react'
import { Link } from "react-router-dom";


const Navbar = (props) => {

  return (
    <div className={`text-${(props.color==="dark")?"white":"dark"}`}>
      <nav className={`navbar fixed-top text-${(props.color==="dark")?"white":"dark"}  navbar-expand-lg bg-${props.nav} bg-body-${props.color}`}>
        <div className={`container-fluid text-${(props.color==="dark")?"white":"dark"} `}>
          <Link className={`navbar-brand text-${(props.color==="dark")?"white":"dark"}`}to="#">NewsSpace</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}` } aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/business">Business</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/general">General</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/health">Health</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/science">Science</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${(props.color==="dark")?"white":"dark"}`} to="/technology">Technology</Link></li>
            </ul>
          </div>
          <div>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.handletoggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" forhtml="flexSwitchCheckDefault">{`${props.mode} Mode`}</label>
            </div>
          </div>
        </div>

      </nav>

    </div>
  )

}

export default Navbar