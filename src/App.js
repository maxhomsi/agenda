import React, { Component } from 'react';
// import axios from 'axios' //para chamar o API
import './App.css';
import CartaoUsuario from './CartaoUsuario'


class App extends Component {
  constructor(){
    super();
    this.state ={
      arrayDeUsuario: [],
      isLoading: true
    };
  }

  componentDidMount(){ //eh um metodo eh um componente que eh chamado qdo solicitado
    this.fetchData() //usando o metodo this para pegar a data (fetch data)
    }

    fetchData(){ //abriu uma funcao para pegar o API
      fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(parsedJSON =>parsedJSON.results.map(usuario => (
{
  //solicitando o que vc quer que pegue
  name: `${usuario.name.first} ${usuario.name.last}`,
  thumbnail: `${usuario.picture.thumbnail}`,
  email: `${usuario.email}`,
  location: `${usuario.location.street.number}, ${usuario.location.street.name}, ${usuario.location.city} - ${usuario.location.state}`
}
      )))
      .then(arrayDeUsuario => this.setState({arrayDeUsuario, isLoading:false}))
      .catch(error => console.log("parsing failed".error))
    }


  render() {
    const {arrayDeUsuario} = this.state
    return (
   <div>
  <header>
    <ol> {arrayDeUsuario.map((arrayDeUsuario) => {
      return(
        

          <CartaoUsuario 
          key = {arrayDeUsuario.name} 
          name = {arrayDeUsuario.name}
          thumbnail = {arrayDeUsuario.thumbnail}
          email = {arrayDeUsuario.email}
          location = {arrayDeUsuario.location}
           
          />
    
      )
    })}

    </ol>
  </header>


</div>
  );
}
  


    
  
}

export default App;
