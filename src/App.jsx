import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let sampleData = [
  {
    key: 1,
    thumbnailImg: "https://via.placeholder.com/400x300",
    location: "Japan",
    destination: "Mount Fuji",
    startDate: "25 March, 2020",
    endDate: "30 March, 2020",
    url: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    description: "Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” its the countrys tallest peak, at 3,776 meters. A pilgrimage site for centuries, its considered one of their 3 sacred mountains."
  },
  {
    key: 2,
    thumbnailImg: "https://via.placeholder.com/400x300",
    location: "Australia",
    destination: "Sydney Opera House",
    startDate: "12 Jan, 2021",
    endDate: "19 Jan, 2021",
    url: "https://goo.gl/maps/681n4jdijgdt3uGS6",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th century architecture."
  },
  {
    key: 3,
    thumbnailImg: "https://via.placeholder.com/400x3np00",
    location: "Norway",
    destination: "Geirangerfjord",
    startDate: "10 Feb, 2022",
    endDate: "17 Feb, 2022",
    url: "https://goo.gl/maps/5J6KAPeSgM8CHQwB7",
    description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality. It is a 15-kilometre-long branch off the Sunnylvsfjorden, which is a branch off the Storfjorden."
  }
];


function Header(){
  return(
    <div className="header">
      <h1>My Travel Journal</h1>
    </div>
    )
}

function Information(props){
  return (
    <div className="container">
      <div className="card">
        <img src={props.thumbnailImg}/>
      </div>
      
      <div className="content">
        <h5 className="location">{props.location}</h5>
        <h1 className="destination">{props.destination}</h1>
        <h4 className="dates">{props.startDate} - {props.endDate}</h4>
        <p className="description">{props.description}</p>
        <a className="url" href={props.url}>Open on Google Maps</a>
      </div>
      </div>

  )
}

function Footer(){
  return(
    <footer className="footer">
      <small>Made by Gracelyn Prajna</small>
    </footer>
  )
}


function App() {
  const cards = sampleData.map((item) => {
    return <Information key={item.key} {...item} />;
  });
  return (
    <div>
      <Header/>
      <section className="cards">{cards}</section>
      <Footer/>
    </div>
  );
}

export default App
