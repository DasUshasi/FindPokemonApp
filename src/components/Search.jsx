import React, { Component } from 'react'
import SearchByType from './SearchByType';
import SearchBySpecies from './SearchBySpecies';
import SearchByGen from './SearchByGen';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            text: null,
            show: false
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({ text: event.target.value.replace(" ", "-") })
        this.setState({ show: false })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ show: true })
    };
    render() {
        return (
            <div className='container my-5' style={{ backgroundColor: this.props.mode === 'dark' ? '#0F0F0F' : 'white' }}>
                <form onSubmit={this.handleSubmit} className='container' style={{ color: this.props.mode === 'dark' ? 'white' : 'black' }}>
                    <label htmlFor="textarea" className="form-label">{this.props.search}</label>
                    <input type="text" className="form-control" id='textarea' placeholder={this.props.place} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-secondary my-3">Submit</button>
                </form>
                {this.state.show && this.props.typeSearch && <SearchByType text={this.state.text} key={this.state.text} mode={this.props.mode}/>}
                {this.state.show && this.props.nameSearch && <SearchBySpecies text={this.state.text} key={this.state.text} mode={this.props.mode}/>}
                {this.state.show && this.props.genSearch && <SearchByGen text={this.state.text} key={this.state.text} mode={this.props.mode}/>}
            </div>
        )
    }
}
