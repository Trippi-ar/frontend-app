import React from "react";
import logo from "../images/Logo.png";
import './Header.css';
import { AppBar, Toolbar , makeStyles, TextField, IconButton} from "@mui/material";
import { Search } from "@mui/icons-material";
import {Login} from "@mui/icons-material";
import Loggin from "../Loggin";
import { ThemeContext } from "@emotion/react";
import Filtros from "./Filtros";
const Header = () => {

    return (
        

<AppBar>
  <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
    <div style={{ display: "flex"}}>
      <img src={logo} alt="Logo" style={{ marginRight: "10px" }} />
      <div class="barra">
        <input className="buscador" placeholder="Buscar..."/>
        <Search className="search" />
      </div>
    </div>
    <div>
      <IconButton class="login" href="Loggin">Sing Up</IconButton>
    </div>
  </Toolbar>
  <Filtros />
</AppBar>
    );
}


export default Header;