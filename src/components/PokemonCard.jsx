import React, { Component } from 'react'

export default class PokemonCard extends Component {
  constructor() {
    super()
    this.state = {
      pokemonId: 0,
      types: [],
      gen: 0,
      imgUrl: null,
      abilities: []
    }
  }

  async componentDidMount() {
    let data = await fetch(this.props.url)
    let parsedData = await data.json()
    this.setState({
      pokemonId: parsedData.id,
      types: parsedData.types,
      imgUrl: parsedData['sprites']['other']['official-artwork']['front_default'],
      abilities: parsedData.abilities,
    })
  }
  gen = () => {
    let id=this.state.pokemonId
    let name=this.props.name
    if (id >= 1 && id <= 151) this.setState({ gen: 1 })
    if (id >= 152 && id <= 251) this.setState({ gen: 2 })
    if (id >= 252 && id <= 386) this.setState({ gen: 3 })
    if (id >= 387 && id <= 493) this.setState({ gen: 4 })
    if (id >= 494 && id <= 649) this.setState({ gen: 5 })
    if (id >= 650 && id <= 721) this.setState({ gen: 6 })
    if (id >= 722 && id <= 809) this.setState({ gen: 7 })
    if (id >= 810 && id <= 905) this.setState({ gen: 8 })
    if (id >= 906 && id <= 1021) this.setState({ gen: 9 })
    if (name.includes("galar")) this.setState({ gen: 8 })
    if (name.includes("paldea")) this.setState({ gen: 9 })
    if (name.includes("alola")) this.setState({ gen: 7 })
}
  render() {
    this.gen()
    let noimg = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
    return (
      <div className={`card bg-${this.props.mode}`} style={{ width: 18 + "rem" , color:this.props.mode==='dark'?'white':'black'}}>
        <img src={this.state.imgUrl ? this.state.imgUrl : noimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1).toLowerCase()}</h3>
          <h6 className="card-text" >Pokedex number: {this.state.pokemonId}</h6>
          {this.state.gen !== 0 && <h6 className="card-text" >Generation: {this.state.gen}</h6>}
          <h5 className="card-text" >Types:  </h5>
          <div className="row justify-content-center">
            {this.state.types.map((element) => {
              return <div className="col-md-6 my-3" key={element.type.name}>
                <img src={`../imgs/${element.type.name}.png`} className="card-img-top" alt="..." />
              </div>
            })}
          </div>
          <h5 className="card-text" >Abilities: </h5>
          <div className="row align-items-start">
            {this.state.abilities ? this.state.abilities.map((element) => {
              return <div className="col-md-6 my-1">{element.ability.name}</div>
            }) : <p>None</p>}
          </div>
          <div className='my-3'></div>
        </div>
      </div>
    )
  }
}
