import styled from "styled-components"
import { pizzaColor } from "../Style/Color"
import title from "../Style/Title"

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

export const FoodLabel = styled(title)`
    position: absolute;
    background-color: ${pizzaColor}
`

export const Food = styled.div`
    height: 200px;
    padding: 10px;
    background-image: ${ ({img}) => `URL(${img})` };
    background-position: center;
    background-size: cover;
`