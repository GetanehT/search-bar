import React, { Component } from 'react';
import importedNames from '../names';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNames // Assuming importedNames is an array
    }
  }
  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    console.log(inputText);
    const filteredNames = importedNames.filter((name) => {
        return name.toLowerCase().includes(inputText);
    });
    
    this.setState({
        names: filteredNames
    });
  };
  render() {
    return (
      <div> 
        <h1>Names Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
       
        <form>
          <input 
            onChange={(event) => this.handleChange(event)}
            type="text" 
            placeholder='Search names...' 
          /> {/* Corrected to be self-closing */}
           
        </form>
        
        <div style={{ margin: 'auto' }}>
          {this.state.names.map(name => {
            return <p key={name}> {name}</p>; // Use name as key (ensure names are unique)
          })}
        </div>
      </div>
    );
  }
}

export default SearchBar;
