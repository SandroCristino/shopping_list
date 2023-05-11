import React from 'react'
import '../Styles/ShoppingItems.css'

export default function ShoppingItems(props) {
    const {picture, name, price} = props 

    return (
        <div className='outerItem'>
            <img className="shopPicture" src={picture} />
            <div className='mx-5 nameProp'>{name}</div>
            <div className='mx-2 priceProp'>{price}</div>
            <div className='btn btn-info w-100 '>Add To Card</div>
        </div>
    )
}
