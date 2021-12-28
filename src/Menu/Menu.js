import React from "react"
import styled from "styled-components"
import { food, formatPrice } from "../Data/FoodData"
import { FoodGrid,FoodLabel, Food } from "./FoodGrid"

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 100px 50px 20px;
`

export const Menu = ({setOpenFood}) => {

    return (
        <MenuStyled>
            {Object.entries(food).map(([sectionName, food]) =>
                <>
                    <h1>{sectionName}</h1>
                    <FoodGrid>
                        {
                            food.map(f => (
                                <Food img={f.img}
                                onClick = {()=>{
                                    setOpenFood(f)
                                }}>
                                    <FoodLabel>
                                        <div>{f.name}</div>
                                        <div>{formatPrice(f.price)}</div>                                        
                                    </FoodLabel>
                                </Food>
                            ))
                        }
                    </FoodGrid>
                </>
            )}
        </MenuStyled>
    )
}