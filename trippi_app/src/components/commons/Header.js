import React from "react";
import logo from "../images/Logo.png";

import { AppBar, Toolbar , makeStyles, TextField} from "@mui/material";
import { Search } from "@mui/icons-material";
import {Login} from "@mui/icons-material";
import { ThemeContext } from "@emotion/react";
import Filtros from "./Filtros";
const Header = () => {

    return (

        <AppBar>
            <Toolbar >
                <img src={logo} ></img>
                <TextField id="outlined-basic" label="Buscar Aqui..." variant="outlined" />
                <Search/>
                <Login/>
            </Toolbar>
            <Filtros/>


        </AppBar>
    );
}


export default Header;