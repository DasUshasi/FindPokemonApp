import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        return (
            <div className='container mt-3'>
                <div className={`card bg-${this.props.mode}`} style={{ width: 18 + "rem", color: this.props.mode === 'dark' ? 'white' : 'black' }}>
                    <div className="card-body">
                        <h5 className="card-title">Note</h5>
                        <h6 className="card-subtitle mb-2">Now {this.props.mode} mode. Want to change?</h6>
                        <p className="card-text">Enable {this.props.mode === 'dark' ? 'light' : 'dark'} mode before searching!</p>
                    </div>
                </div>
            </div>
        )
    }
}
