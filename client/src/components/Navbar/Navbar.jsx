import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <>
      <div className="navbar-wrapper container-fluid">
        <div className="container">
          <div className="row d-flex align-items-center py-2">
            <div className="col-2 ps-0 col-lg-1 logo-wrapper">
              <img className="club-logo" src="logo.jpg" alt="" />
            </div>
            <div className="col-auto">
              <h2 className="club-name">Club Name</h2>
            </div>
          </div>
          <hr />
        </div>

        <div className="container" >
          <div className="row d-flex" style={{ flexDirection: "row-reverse" }}>
            <div className="col-3 quick-links col-lg-2 py-2 text-center "><b> Events</b></div>
            <div className="col-2 px-0 quick-links col-lg-2 py-2 text-center "><b> Team</b></div>
            <div className="col-3 quick-links col-lg-2 py-2 text-center "><b> Work</b></div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}
