import React, { Component } from 'react'
// import valantingoItems from './valantingoItems'

export default class Card extends Component {
    constructor() {
        super()
        this.state =
            [{
                "id": 0,
                "item": "You make my heart pop"
            },
            {
                "id": 1,
                "item": "You blow me away"
            },
            {
                "id": 2,
                "item": "You send my heart into Orbit"
            },
            {
                "id": 3,
                "item": "You krack me up"
            },
            {
                "id": 4,
                "item": "Life is butter with you in it"
            },
            {
                "id": 5,
                "item": "We’re 2 of a kind"
            },
            {
                "id": 6,
                "item": "It’s a joy being your friend"
            },
            {
                "id": 7,
                "item": "Valentine, you float my boat"
            },
            {
                "id": 8,
                "item": "I love you to the moon and back"
            },
            {
                "id": 9,
                "item": "You’re the apple of my eye"
            },
            {
                "id": 10,
                "item": "You melt my heart"
            },
            {
                "id": 11,
                "item": "You make my loop complete"
            },
            {
                "id": 12,
                "item": "You’re like a fine wine, Valentine"
            },
            {
                "id": 13,
                "item": "Don’t make me whine, be my valentine"
            },
            {
                "id": 14,
                "item": "You’re the highlight of my day!"
            },
            {
                "id": 15,
                "item": "Love is in the air"
            },
            {
                "id": 16,
                "item": "I’m never board when you’re around"
            },
            {
                "id": 17,
                "item": "I can’t smile with out you"
            },
            {
                "id": 18,
                "item": "I love ewe"
            },
            {
                "id": 19,
                "item": "You’re as cute as a button"
            },
            ]
    }

    render() {
        return (
            <div id='container'>
                <div id='wrapper'>
                    {this.state.map(item => (
                        <button id='btn'>{item.item}</button>
                    ))}
                </div>
            </div>
        )
    }
}



// ?! Style

const li = {

}

// const btn = {
//     display: 'grid',
//     // flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: 'none',
//     backgroundColor: 'pink',
//     margin: '20px',
//     fontSize: '24px',
//     border: 'none'
// }