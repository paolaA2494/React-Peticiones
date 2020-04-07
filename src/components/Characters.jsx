import React, { Component } from 'react';
import  axios from 'axios';


class Character extends Component{

    constructor(props){
        super(props);
        this.state = {
             dataCharacter : [],
        }
        console.log("Hello soy el CONSTRUCTOR");
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
            console.log("Componnent Dimount")
            console.log(res.data)
            this.setState({
                dataCharacter : res.data.results
            })
             
        })
    }
  render(){

    console.log("Hello soy el RENDER");
     return this.state.dataCharacter.map((character) => {
     return <h1 key={`character-${character.id}`}>{character.name}</h1>

     });
   }
}

export default Character;