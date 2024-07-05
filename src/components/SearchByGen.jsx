import React, { Component } from 'react'
import Alert from './Alert';
import PokemonCard from './PokemonCard';
import Spinner from './Spinner';

export default class SearchByType extends Component {
    constructor() {
        super()
        this.state = {
            genName: "",
            pokemonList: []
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://pokeapi.co/api/v2/generation/${this.props.text}/`;
        try {
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                genName: parseddata['main_region']['name'],
                pokemonList: parseddata['pokemon_species']
            })
        } catch (error) {
            this.setState({ invalid: true })
        }
        this.setState({ loading: false })
    }
    render() {
        return (
            <div className='container'>
                {this.state.loading && <Spinner />}
                {this.state.invalid && <Alert msg="Invalid Generation. Enter a valid generation and try again." />}
                {!this.state.invalid &&
                    <div className='container' style={{ color: this.props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>Region name: {this.state.genName}</h2>
                        <h2>Pokemon List:</h2>
                        <div className="row justify-content-center">
                            {this.state.pokemonList.map((element) => {
                                return <div className="col-md-3 my-3" key={element.name}>
                                    <PokemonCard id={element.name} name={element.name} url={element.url.slice(0, 33) + element.url.slice(41)} mode={this.props.mode} />
                                </div>
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}