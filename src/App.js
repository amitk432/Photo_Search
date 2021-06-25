import logo from './logo.svg';
import React, { useEffect, useState, Component } from 'react';
import './App.css';
// import ph from './components/ph'

class App extends Component {

  constructor() {
    super();
    this.state = {
      Search: "cats",
      pageNo: 1000,
      pictures: [],
    };
  }

  componentDidMount() {

    const key = '36f2bcfe9679e769f97297635a7c23e8';
    
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key + '&tags=' + this.state.Search + '&per_page=' + this.state.pageNo + '&format=json&nojsoncallback=1')
      .then(function (response) {
        return response.json();
      })

      .then(function (json) {
        let array = json.photos.photo.map((jsonpic) => {
          var Path = 'https://farm' + jsonpic.farm + '.staticflickr.com/' + jsonpic.server + '/' + jsonpic.id + '_' + jsonpic.secret + '.jpg';
          return (
            <img className="pictures" src={Path}></img>
          )
        })

        this.setState({ picture: array });
      }.bind(this))
  }

  render() {
    return (

      <div className="App">

        <header className="App-header">

          <h1>Search Photos</h1>
          <input type="text" className="search-bar" id="searchbar" placeholder="Search Photos" value={this.state.Search} />
        
        </header>

        <div className="Images">

          {this.state.picture}

        </div>
      </div>
    );
  }
}
export default App;