import React, { Component } from 'react'
import PokemonCard from './PokemonCard';
import Alert from './Alert';
import Spinner from './Spinner';

export default class SearchByType extends Component {
    constructor() {
        super()
        this.state = {
            pokemonList: [],
            damageTo: [],
            damageFrom: [],
            invalid: false,
            loading: false
        }
    }
    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://pokeapi.co/api/v2/type/${this.props.text}/`;
        try {
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                pokemonList: parseddata.pokemon,
                damageTo: parseddata.damage_relations.double_damage_to,
                damageFrom: parseddata.damage_relations.double_damage_from
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
                {this.state.invalid && <Alert msg="Invalid Type. Enter a valid pokemon type and try again." />}
                {!this.state.invalid &&
                    <div className='container' style={{ color: this.props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>Strong Against:</h2>
                        <div className="row justify-content-center">
                            {this.state.damageTo.map((element) => {
                                return <div className="col-md-3 my-3 text-center" key={element.name}>
                                    <img src={`../imgs/${element.name}.png`} className="img-thumbnail" alt="..." />
                                </div>
                            })}
                        </div>
                        <h2>Weak Against:</h2>
                        <div className="row justify-content-center">
                            {this.state.damageFrom.map((element) => {
                                return <div className="col-md-3 my-3 text-center" key={element.name}>
                                    <img src={`../imgs/${element.name}.png`} className="img-thumbnail" alt="..." />
                                </div>
                            })}
                        </div>
                        <h2>Pokemon List:</h2>
                        <div className="row justify-content-center">
                            {this.state.pokemonList.map((element) => {
                                return <div className="col-md-3 my-3" key={element.pokemon.name}>
                                    <PokemonCard id={element.pokemon.name} name={element.pokemon.name} url={element.pokemon.url} mode={this.props.mode} />
                                </div>
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}