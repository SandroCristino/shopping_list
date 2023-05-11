import React, { Component } from 'react'
import '../Styles/ShoppingList.css'
import ShoppingItems from './ShoppingItems.js'
import picture1 from '../Assets/BigBrightBlue.jpg'
import picture2 from '../Assets/CherryBlossom.jpg'
import picture3 from '../Assets/VibrantBlue.jpg'
import picture4 from '../Assets/CottonCandy.jpg'
import picture5 from '../Assets/EuropeanGarden.jpg'
import picture6 from '../Assets/PinkSurprise.jpg'
import picture7 from '../Assets/RedRoses.jpg'
import picture8 from '../Assets/RoseAndLilyCelebration.jpg'
import picture9 from '../Assets/SouthernPeach.jpg'



export default class ShoppingList extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    picture: picture1,
                    name: 'Big Bright Blue',
                    price: 'Price: 44.99$'
                },
                {
                    picture: picture2,
                    name: 'Cherry Blossom',
                    price: 'Price: 39.99$'
                },
                {
                    picture: picture3,
                    name: 'Vibrant Blue',
                    price: 'Price: 44.99$'
                },
                {
                    picture: picture4,
                    name: 'Cotton Candy',
                    price: 'Price: 39.99$'
                },
                {
                    picture: picture5,
                    name: 'European Garden',
                    price: 'Price: 49.99$'
                },
                {
                    picture: picture6,
                    name: 'Pink Surprise',
                    price: 'Price: 49.99$'
                },
                {
                    picture: picture7,
                    name: 'Red Roses',
                    price: 'Price: 52.99$'
                },
                {
                    picture: picture8,
                    name: 'Rose And Lily Celebration',
                    price: 'Price: 39.99$'
                },
                {
                    picture: picture9,
                    name: 'Southern Peach',
                    price: 'Price: 44.99$'
                }
            ],
        }
    }

    render() {
        const {list} = this.state 
        return (
        <div className='cardGrid'>
            {list.map((item, index) => (
                <ShoppingItems 
                    key = {index}
                    picture = {item.picture}
                    name = {item.name}
                    price = {item.price}
                    className='cardItem'  
                />
            ))}
        </div>
        )
    }
}
