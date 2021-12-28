export function formatPrice(price){
    return price.toLocaleString("en-US",{
        style: "currency",
        currency: "INR"
    })
}

const foodItem = [
    {
        name: "Cheesilicious",
        img: "img/mozzarella.jpg",
        section: "Pizza",
        price: 229
    },
    {
        name: "Cheesy Tomatino Basil",
        img: "img/cheese-tomato-basil.jpg",
        section: "Pizza",
        price: 259
    },
    {
        name: "Classic Farmhouse",
        img: "img/farmhouse.jpg",
        section: "Pizza",
        price: 329
    },
    {
        name: "Paneer Makhani",
        img: "img/paneer-makhani.jpg",
        section: "Pizza",
        price: 379
    },
    {
        name: "Pepperoni",
        img: "img/paproni.jpg",
        section: "Pizza",
        price: 379
    },
    {
        name: "Chicken Barbeque",
        img: "img/bbq-chicken.jpg",
        section: "Pizza",
        price: 425
    },
    {
        name: "Lemonade",
        img: "img/lemonade.jpg",
        section: "Drinks",
        price: 79
    },
    {
        name: "Blue Lagoon",
        img: "img/blue-lagoon.jpg",
        section: "Drinks",
        price: 99
    },
    {
        name: "Fresh Fruit Juice",
        img: "img/juice.jpg",
        section: "Drinks",
        price: 119,
        choice: ["Kiwi", "Orange", "Mixed Fruit"]
    } 
]

export const food = foodItem.reduce((res,food) =>{
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res
}, {})