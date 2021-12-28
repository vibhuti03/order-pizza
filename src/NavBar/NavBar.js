import React from "react"
import styled from "styled-components"
import { pizzaColor } from "../Style/Color"
import title from "../Style/Title"

const NavBarStyle = styled.div`
    background-color : ${pizzaColor};
    position: fixed;
    height: 70px;
    width: 100%;
    z-index: 10;

`

const Logo = styled(title)`
    color : white;
    font-size: 60px;
    text-shadow: 1px 1px 3px yellow;
    margin-left: 5px;
`

const NavBar=()=>{

    return(
        <NavBarStyle>
        <Logo>
        Your Pizzaa🍕
        </Logo>
        </NavBarStyle>
    )
}

export default NavBar