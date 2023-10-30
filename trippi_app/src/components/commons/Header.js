import React from "react";
import logo from "../images/Logo.png";

import { AppBar, Toolbar , makeStyles} from "@mui/material";
import { Search } from "@mui/icons-material";
import { ThemeContext } from "@emotion/react";
const Header = () => {

    return (

        <AppBar>
            <Toolbar >
                <img src={logo} ></img>
                <Search/>
            </Toolbar>


        </AppBar>
    );
}


export default Header;