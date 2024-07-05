import React, { Component } from 'react'
import Alert from './Alert';
import PokemonCard from './PokemonCard';
import Spinner from './Spinner';

export default class SearchByType extends Component {
    constructor() {
        super()
        this.state = {
            evolvesFrom: [],
            evolvesFromImg: "",
            evolvesFromName: "",
            evolvesFromType: [],
            evolvesFromId: [],
            gen: 0,
            id: 0,
            varieties: [],
            moves: [],
            invalid: false,
            isBaby: false,
            isMythical: false,
            isLegendary: false,
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://pokeapi.co/api/v2/pokemon-species/${this.props.text}/`;
        try {
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                evolvesFrom: parseddata.evolves_from_species,
                id: parseddata.id,
                varieties: parseddata.varieties,
                isBaby: parseddata.is_baby,
                isMythical: parseddata.is_mythical,
                isLegendary: parseddata.is_legendary,
            })
            let movesUrl = parseddata.varieties[0].pokemon.url
            let data2 = await fetch(movesUrl);
            let parseddata2 = await data2.json();
            this.setState({ moves: parseddata2.moves });
            try {
                let url2 = `https://pokeapi.co/api/v2/pokemon/${this.state.evolvesFrom.name}/`
                let data3 = await fetch(url2);
                let pd = await data3.json();
                this.setState({
                    evolvesFromName: pd.name,
                    evolvesFromImg: pd['sprites']['other']['official-artwork']['front_default'],
                    evolvesFromId: pd.id,
                    evolvesFromType: pd.types
                })
            } catch (error) {
                this.setState({ evolvesFromImg: null })
            }
        } catch (error) {
            this.setState({ invalid: true })
        }
        this.setState({ loading: false })
    }
    gen = () => {
        let id = this.state.id
        if (id >= 1 && id <= 151) this.setState({ gen: 1 })
        if (id >= 152 && id <= 251) this.setState({ gen: 2 })
        if (id >= 252 && id <= 386) this.setState({ gen: 3 })
        if (id >= 387 && id <= 493) this.setState({ gen: 4 })
        if (id >= 494 && id <= 649) this.setState({ gen: 5 })
        if (id >= 650 && id <= 721) this.setState({ gen: 6 })
        if (id >= 722 && id <= 809) this.setState({ gen: 7 })
        if (id >= 810 && id <= 905) this.setState({ gen: 8 })
        if (id >= 906 && id <= 1021) this.setState({ gen: 9 })
    }
    render() {
        this.gen()
        let noimg = "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
        return (
            <div className='container'>
                {this.state.loading && <Spinner />}
                {this.state.invalid && <Alert msg="Invalid name. Enter a valid pokemon name and try again." />}
                {!this.state.invalid &&
                    <div className='container' style={{ color: this.props.mode === 'dark' ? 'white' : 'black' }}>
                        <h6>Generation: {this.state.gen}</h6>
                        <h6>Pokedex ID: {this.state.id}</h6>
                        {this.state.isBaby && <h6>Baby pokemon</h6>}
                        {this.state.isMythical && <h6>Mythical pokemon</h6>}
                        {this.state.isLegendary && <h6>Legendary pokemon</h6>}
                        <h6>Varieties: </h6>
                        <div className="row justify-content-center">
                            {this.state.varieties && this.state.varieties.map((element) => {
                                return <div className="col-md-3 my-3" key={element.pokemon.name}>
                                    <PokemonCard name={element.pokemon.name} url={element.pokemon.url} gen={this.props.gen} mode={this.props.mode} />
                                </div>
                            })}
                        </div>
                        {this.state.evolvesFrom && <>
                            <h6>Evolves from: </h6>
                            <div class={`card mb-3 my-3 bg-${this.props.mode}`} style={{ maxWidth: 540 + "px", color: this.props.mode === 'dark' ? 'white' : 'black' }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={this.state.evolvesFromImg ? this.state.evolvesFromImg : noimg} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title">{this.state.evolvesFromName.charAt(0).toUpperCase() + this.state.evolvesFromName.slice(1).toLowerCase()}</h3>
                                            <h6 class="card-title">Id: {this.state.evolvesFromId}</h6>
                                            <h5 className="card-text" >Types:  </h5>
                                            <div className="row align-items-start">
                                                {this.state.evolvesFromType.map((element) => {
                                                    return <h5 className="col-md-6 my-1" key={element.type.name}>{element.type.name}</h5>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                        <h6>Moves: </h6>
                        <div className="row align-items-start">
                            {this.state.moves.map((element) => {
                                return <div className="col-md-3 my-2" key={element.move.name}>{element.move.name.charAt(0).toUpperCase() + element.move.name.slice(1).toLowerCase()}</div>
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}