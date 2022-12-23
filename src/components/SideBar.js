import React from "react";
import image from "../assets/images/logo-DH.png";
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies"
import { Link, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import SearchMovies from "./SearchMovies";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/genres">
            <i className="fas fa-fw fa-folder"></i>
            <span>Genres</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/lastMovie">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last Movie</span>
          </a>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/rowMovie">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

         {/*<!-- Nav Item - SearchMovies -->*/}
         <li className="nav-item">
          <a className="nav-link" href="/searchMovies">
            <i className="fas fa-fw fa-table"></i>
            <span>Search Movies</span>
          </a>
        </li>


        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
      <Routes>
          <Route path="/" element={<ContentWrapper/>}></Route> 
          <Route path="/genres" element={<GenresInDb/>}></Route> 
          <Route path="/lastMovie" element={<LastMovieInDb/>}></Route> 
          <Route path="/rowMovie" element={<ContentRowMovies/>}></Route> 
          <Route path="/searchMovies" element={<SearchMovies/>}></Route> 
          <Route path="*" element={<NotFound/>}></Route> 
        </Routes>
    </React.Fragment>
   
  );
}
export default SideBar;
