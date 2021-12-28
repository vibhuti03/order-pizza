import React from "react";
import {GlobalStyle} from "./Style/GlobalStyle";
import NavBar from "./NavBar/NavBar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";

function App() {
    return (
        <div>
        <GlobalStyle/>
        <NavBar />
        <Banner />
        <Menu />
        </div>
    )
}

export default App