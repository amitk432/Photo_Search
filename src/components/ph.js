import React, { Component } from 'react'

class ph extends Component {

    constructor(){
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount(){
        const key = '36f2bcfe9679e769f97297635a7c23e8' ;
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags=cats&per_page=1&format=json&nojsoncallback=1') 
        .then(function(response){
            return response.json();
        })

        .then(function(j){
            let picArray = j.photos.photo.map((pic) => {
                var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg' ;
                return(
                    <img alt = "dogs" src= {srcPath}></img>
                )
            })
        this.setState({Pictures: picArray});
        }.bind(this))
    }


    render(){
    return (
        <p className="App-Intro">
            {this.state.pictures}
        </p>
    );
}
}
export default ph
