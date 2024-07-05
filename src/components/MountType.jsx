import React, { Component } from 'react'
import Search from './Search'
import Note from './Note'

export default class MountType extends Component {
  render() {
    return (
      <div> 
        <Note mode={this.props.mode}/> 
        <Search search={'Enter Pokemon Type:'} typeSearch={true} place={"type"} mode={this.props.mode}/>
      </div>
    )
  }
}
