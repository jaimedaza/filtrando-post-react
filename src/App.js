import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida



class App extends Component {

  state = {
    search: '',
    posts2: posts,
    posts3: posts
  } 
  
  updateSearch = (event) => {

    console.log(event.target.value)    

    let oldPosts = this.state.posts2    

   const newPosts = oldPosts.filter(post => post.title.toLowerCase().includes(event.target.value))

    this.setState({

      search: event.target.value,
      posts3: newPosts  

    })

    console.log(newPosts);
    console.log("estado " + this.state.search);           
    
  }  

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" onChange={this.updateSearch} placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>          
            {this.state.posts3.map((post, index) => 
              <li key={index}>
                <a href={post.url}><img src={post.image } /></a> 
                <p>{ post.title }</p>
              </li>
            )}                    
        </ul>
      </div>
    )
  }
}


export default App


