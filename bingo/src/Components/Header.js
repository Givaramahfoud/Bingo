import React from 'react'

export default function Header() {
    return (
        <div>
            <h1 style={header} >Valantingo</h1>
            <i style={heart} class="fas fa-heart"></i>
        </div>
    )
}



//?! Style 

const header = {
    fontSize: '62px',
    color: 'red',
    fontFamily: 'cursive'
}

const heart = {
    fontSize: '62px',
    color: 'red'

}