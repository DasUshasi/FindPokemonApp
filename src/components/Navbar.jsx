import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-vinyl mx-3" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
                        <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    <Link className="navbar-brand" to="/">GetPokemon</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search Pokemon
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/searchName">Search by Name</Link></li>
                                    <li><Link className="dropdown-item" to="/searchType">Search by Type</Link></li>
                                    <li><Link className="dropdown-item" to="/searchGen">Search by Generation</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='form-check form-switch text-light'>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggle} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {this.props.mode === 'dark' ? 'light' : 'dark'} mode</label>
                    </div>
                </div>
            </nav>
        )
    }
}
