import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor')
  }

componentDidMount() {
  console.log('componentDidMount')
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()
    .then((users)=> this.setState(()=>{
      return {monsters: users}
    },
    ()=>{
      console.log(this.state)
    }
    ))
   
    )
  }
  
  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input className='search-box'  type='search' placeholder="search monsters" onChange={(event)=>{
          // [ {name:"Leanne"}, {name:'Yihua'}] 검색 기능 챕터3-41
          console.log({startingArray: this.state.monsters})
          const searchField = event.target.value.toLocaleLowerCase()
          this.setState(
            ()=>{
            return { searchField }
          },
          )
        }} 
         /> 

       {
        filteredMonsters.map((monster)=>{
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })
       }
      </div>
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //    Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
      //   </p>
      // <button
      // onClick={()=>{
      //   this.setState(()=>{
      //     return {
      //       name : { firstName: 'Andrei', lastName : 'Neaogie'}
      //     }
      //   }, ()=>{
      //     console.log(this.state)
      //   })
      // }}>
      //   Change Name
      // </button>

      // </header>
    );
  }
}

export default App;
