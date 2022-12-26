import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

class App extends Component{
constructor() {
  super();
  
  this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => { 
          return {monsters: users}
        },
        () => {
          console.log(this.state);
        }
      ))
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => { 
      return { searchString }
    });
  }
 
  render() {

    const {monsters, searchString} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchString)} );

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}>
        </input>

        <CardList monsters={filteredMonsters} ></CardList>
      </div>
    );
  }
}

export default App;
