import React, { Component } from 'react'
import Search from './Search'
import Note from './Note'

export default class MountGen extends Component {
  render() {
    return (
      <div>
        <Note mode={this.props.mode}/> 
        <Search search={'Enter Pokemon Generation:'} genSearch={true} place={"gen"} mode={this.props.mode}/>
      </div>
    )
  }
}