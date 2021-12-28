import React from "react"
import styled from "styled-components"
import { pizzaColor } from "../Style/Color"
import title from "../Style/Title"

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 10px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`

export const ConfirmButton = styled(title)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaColor};
    ${({ disabled })=>
        disabled &&
        `
        opacity: .5;
        background-color: grey;
        pointer-events: none;
        `
    }
`

const DialogShadow = styled.div`
    
`