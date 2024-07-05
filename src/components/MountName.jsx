import React, { Component } from 'react'
import Search from './Search'
import Note from './Note'

export default class MountName extends Component {
  render() {
    return (
      <div>
        <Note mode={this.props.mode}/> 
        <Search search={'Enter Pokemon Name:'} nameSearch={true} place={"name"} mode={this.props.mode}/>
      </div>
    )
  }
}