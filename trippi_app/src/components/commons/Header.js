import React from "react";
import logo from "../images/Logo.png";

import { AppBar, Toolbar , makeStyles, TextField, IconButton} from "@mui/material";
import { Search } from "@mui/icons-material";
import {Login} from "@mui/icons-material";
import { ThemeContext } from "@emotion/react";
import Filtros from "./Filtros";
const Header = () => {

    return (

        <AppBar>
            <Toolbar style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                <img src={logo} ></img>
                <TextField id="outlined-basic" label="Buscar Aqui..." variant="outlined" size="small"/>
                <Search/>
                <Login/>
                <IconButton>Login</IconButton>
            </Toolbar>
            <Filtros/>


        </AppBar>
    );
}


export default Header;