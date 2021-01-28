import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'

export default class Container extends Component {
    render() {
        return (
            <div>
                <Header />
                <Card />
            </div>
        )
    }
}
