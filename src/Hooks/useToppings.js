import { useState } from "react";

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings())

    function checkToppings(index){
        const newToppings = [...toppings]
        newToppings[index].checked = !newToppings[index].checked
        setToppings(newToppings)
    }

    return{
        checkToppings,
        toppings
    }
}

function getDefaultToppings(){
    return toppingsList.map(topping => ({
        name: toppings,
        checked: false
    }))
}

const toppingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onion",
    "Pepper",
    "Ham",
    "Spinach",
    "Tomato",
    "Olives",
    "Mushrooms"
]