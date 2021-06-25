import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Search: "Recent",
      pageNo: 1000,
      pictures: [],
    };
  }

  componentDidMount() {
    this.LoadImages();
  }

  LoadImages = () => {
    const key = '36f2bcfe9679e769f97297635a7c23e8';
    const Def_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key + '&format=json&nojsoncallback=1';
    const Search_Val = '&tags= ' + this.state.Search;
    const PageNo_Val = this.state.pageNo

    fetch(Def_URL + Search_Val + '&per_page' + PageNo_Val)
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

  HandleChange = (e) => {
    this.setState({ Search: e.target.value });
  }

  Delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();


  // availablescrollArea = (function () {
  //   return getScrollTop() < getDocumentHeight() - window.innerHeight;
  // })


  render() {
    return (

      <div className="App">

        <header className="App-header">

          <h1>Search Photos</h1>

          <p>
            <input
              className="search-bar"
              onChange={this.HandleChange}
              placeholder="Search Photos"
              onKeyUp={() => this.Delay(function () {
                this.LoadImages();
              }.bind(this), 100)} >
            </input>
          </p>

        </header>

        <div className="Images">
          {this.state.picture}
        </div>

      </div>

    );
  }
}