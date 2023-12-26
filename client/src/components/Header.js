import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
// import { Context } from '../context/Context'
const Header = ({ role , auth }) => {
  return (
    <>
   
      <Navbar
        variant="dark"
        expand="lg"
        sticky="top"
        style={{ background: "#34469D" }}
      >
        <div className="container">
          <Navbar.Brand href="/">Fab lab</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " className="d-flex justify-content-end">
            <Nav className="mr-5 d-flex">
              {/* {state.adm ? (
                <NavLink className="nav-link" to={"/admin"}>
                  admin
                </NavLink>
              ) : (
                ""
              )} */}
              <NavLink className="nav-link" to={"/"}>
                Главная
              </NavLink>
              <NavLink className="nav-link" to={"/search"}>
                 поиск студента
              </NavLink>
      
              {/* {state.authenticated ? (
                <NavLink className="nav-link" to={"/tests"}>
                  Тесты
                </NavLink>
              ) : (
                ""
              )} */}
              
              {role !== "default" ? (
                <NavLink
                  className="nav-link"
                  to={"/user"}
                >
                  {auth.username}
                </NavLink>
              ) : (
                <NavLink className="nav-link" to={"/authPage"}>
                  Вход
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  role: state.role,auth: state.auth,
});

export default connect(mapStateToProps)(Header);
