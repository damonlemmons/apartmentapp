import React, { Component } from 'react'
import Apts from '../store/Apts'
import {Link} from 'react-router-dom'

class AptDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apts: Apts
    }
  }


componentWillMount(){
    const id = this.props.match.params.id
    let apt = this.state.apts.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apt) {
      this.setState({aptId: id, apt: apt})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.apt.name}</h2>
      </div>
    );
  }
}

export default AptDetail;
