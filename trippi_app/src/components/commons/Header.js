import React from "react";
import logo from "../images/Logo.png";

import { AppBar, Toolbar , makeStyles, TextField, IconButton} from "@mui/material";
import { Search } from "@mui/icons-material";
import {Login} from "@mui/icons-material";
import Loggin from "../Loggin";
import { ThemeContext } from "@emotion/react";
import Filtros from "./Filtros";
const Header = () => {

    return (
        

        <AppBar>
            <Toolbar style={{display: "flex", alignItems: "center", }}>
                <img  src={logo} ></img>
                <input class="buscador" placeholder="Buscar..."></input>
                <Search clas="search"></Search>
                <IconButton href="Loggin">Login</IconButton>
            </Toolbar>
            <Filtros/>


        </AppBar>
    );
}


export default Header;