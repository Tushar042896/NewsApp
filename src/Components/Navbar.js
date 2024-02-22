import React from 'react';

const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge text-bg-secondary"> Latest News</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="navbar-nav" >
              <a className="nav-link" onClick={()=>setcategory("business")} >Business</a>
              <a className="nav-link" onClick={()=>setcategory("entertainment")} >Entertainment</a>
              <a className="nav-link" onClick={()=>setcategory("general")}>General</a>
              <a className="nav-link" onClick={()=>setcategory("health")} >Health</a>
              <a className="nav-link" onClick={()=>setcategory("science")}>Science</a>
              <a className="nav-link " onClick={()=>setcategory("sports")}>Sports</a>
              <a className="nav-link"  onClick={()=>setcategory("technology")}>Technology</a>

            </li>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
