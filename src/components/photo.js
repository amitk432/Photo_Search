import React from 'react'
// import '../Pages/CSS/projects.css'

// export default class projects extends React.Component {

//     //fetch api from url
//     state = {
//         isLoaded: false,
//         item: [],
//     };

//     componentDidMount() {
//         fetch('https://run.mocky.io/v3/7d7f55b3-6a83-47b8-b7cd-85c3c6a74aee')
//         .then(res=> res.json())
//         .then(json => {
//             this.setState({
//                 isLoaded: true,
//                 items: json,

//             });
//         })
//       }



//     render() {

//         var { isLoaded, items } = this.state;

//         if (!isLoaded) {
//             return <div className="Loading..."></div>
//         }

//        else{

//         return (
//             <div className="data">
//                 <div className="innerwidth">
//                     <h4>Nord VPN</h4>
//                     <h5>Cracked Accounts</h5>
//                 <ul>
//                     {items.results.map(item => (


//                             <div className="accounts">
//                                 <span id="username">
//                                     Username: {item.Username}
//                                 </span>
//                                 <span id="password">
//                                     Password: {item.Password}
//                                 </span>
//                             </div>


//                     ))};
//                 </ul>
//                 </div>
//             </div>
//         );
//        }
//     }
// }










 export default class photo extends React.Component {
 
     //fetch api from url
     state = {
         loading: true,
         person: [],
     };
     
     async componentDidMount() {
         //const url = "https://api.randomuser.me/" ;
         const url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=36f2bcfe9679e769f97297635a7c23e8&format=json&nojsoncallback=1&text=cats&extras=url_o";
         const response = await fetch(url);
         const data = await response.json();
         this.setState({ person: data.results[1], loading: false }) ;
       console.log(data.results[0]) ;
       }
 
     render() {
 
         if (this.state.loading) {
             return <div className="Loading..."></div>
         }
 
         if (!this.state.person) {
             return <div className="didn't Get a Person"></div>
         }
 
         return (
             <div className="data">
                 <h4>Random User Data</h4>
                 <img className="image" src={this.state.person.photo}/>
             </div>
         );
     }
 }



// import React, { useEffect, useState } from 'react';
// // import { Card } from "react-bootstrap";
// import axios from "axios";
// import '../Pages/CSS/projects.css'

// const photo = () => {

//     const [cardData, setCardData] = useState([]);
//     const [visible, setVisible] = useState(1);

//     const allCardData = async () => {
//         // const api_key = "36f2bcfe9679e769f97297635a7c23e8" ;
//         const response = await axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=36f2bcfe9679e769f97297635a7c23e8&format=json&nojsoncallback=1&text=cats&extras=url_ohttps://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOURAPIKEY&format=json&nojsoncallback=1&text=cats&extras=url_o");
//         // fetch('https://run.mocky.io/v3/7d7f55b3-6a83-47b8-b7cd-85c3c6a74aee')
//         setCardData(response.data.results)
//     }

//     const loadmore = () => {
//         setVisible(visible + 1)
//     }

//     useEffect(() => {
//         allCardData()

//     }, [])

//     const renderCard = (person, index) => {
//         return (
//             // <div className="carddata">
//             // <Card style={{ width: '18rem' }}>
//             //     <Card.Body>
//             //         <Card.Title></Card.Title>
//             //         <Card.Text>
//             //            <ul>
//             //                <li>{person.Username}</li>
//             //                <li>{person.Password}</li>
//             //            </ul>
//             //         </Card.Text>
//             //     </Card.Body>
//             // </Card>
//             // </div>


//              <div className="data">
//                  <h4>Random User Data</h4>
//                  <img className="image" src={this.state.person.picture.large}/>
//              </div>
//         )
//     }

//     return (
//         <div className="Projects">
//             {cardData.slice(0, visible).map(renderCard)}
//             {visible < cardData.length &&(
//                 <button onClick={loadmore}>Load More</button>
//             )}
//         </div>
//     );



    //       //fetch api from url
    //       state = {
    //           loading: true,
    //           person: [],
    //       };

    // //      async componentDidMount() {
    // //          //const url = "https://api.randomuser.me/" ;
    // //          const url = "https://run.mocky.io/v3/1cdc1170-29fd-4636-a437-ced2bde7e0a8";
    // //          const response = await fetch(url);
    // //          const data = await response.json();
    // //          this.setState({ person: data.results[0], loading: false }) ;
    // //        console.log(data.results[0]) ;
    // //        }



    //         async componentDidMount() {
    //             //const url = "https://api.randomuser.me/" ;
    //             const url = "https://run.mocky.io/v3/7d7f55b3-6a83-47b8-b7cd-85c3c6a74aee";
    //             const response = await fetch(url);
    //             const data = await response.json();




    //             this.setState({ person: data.results[5], loading: false }) ;

    //                 //for(i = 0; i<data.results.length; i++){
    //                 // On Click Funtion
    //                 //   window.onload = function () {
    //                 //       //const navigation = document.querySelector('.navigation');
    //                 //       document.querySelector('.nextbutton').onclick = function () {
    //                 //         this.classList.toggle('active');
    //                 //         navigation.classList.toggle('active')
    //                 //       }
    //                 //     }    
    //                 console.log(data.results[5]) ;

    //               //  }
    //           }






    //       render() {

    //           if (this.state.loading) {
    //               return <div className="Loading..."></div>
    //           }

    //           if (!this.state.person) {
    //               return <div className="didn't Get a Person"></div>
    //           }

    //           return (
    //               <div className="data">
    //                   <h4>Random User Data</h4>
    //                   <div className="name_first">{this.state.person.Username}</div>
    //                   <div className="name_last">{this.state.person.Password}</div>
    //               </div>
    //           );
    //       }
    
// export default photo;