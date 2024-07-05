import React, { Component } from 'react'
import '../home.css'
import Carousel from './Carousel'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='body'>
                    {/* <div className="red"></div> */}
                    {/* <div className="black"></div> */}
                    {/* <div className="white"></div> */}
                    {/* <div className="plate"></div> */}
                </div>
                <Carousel className='carousel' />
                {/* <div className="shadow"></div> */}
                <div className="text">
                    <h1>Know Pokemon</h1><br />
                    <h5>Pokemons or Pocket Monsters are amazing creatures from the Pokemon universe who resemble animals from our world and have amazing powers.</h5>
                </div>
            </div>
        )
    }
}
