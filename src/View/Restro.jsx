import React from "react";
import "./Restro.css";                // import css from file

export default function Restro () {

    const RestroList = [
        {
            id:        1,
            name :    "KFC",
            location: "J M Road",
            City:     "Pune",
            img:      "https://img.restaurantguru.com/r722-burger-KFC-2022-07-132.jpg"
        },
        { 
            id:        2,
            name:     "Pizza Hut",
            location: "Marine Drive",
            City:     "Mumbai",
            img:      "https://wallpapers.com/images/hd/modern-pizza-hut-restaurant-lnif80dwcrdwjhp6.jpg"
        },
        {
            id:        3,
            name:     "Domino's",
            location: "Telco",
            City :    "TataNagar",
            img:      "https://g.foolcdn.com/editorial/images/589294/1_dominos-store_pensacola-fl_2.jpg"
        },
        {
            id:        4,
            name:     "StarBucks",
            location: "Hinjawadi",
            City :    "Indore",
            img:      "http://upload.wikimedia.org/wikipedia/commons/5/55/HK_Kln_Bay_EMAX_Starbucks_Coffee.JPG"
        },
        {
            id:        5,
            name:     "Hotel Radio",
            location: "Camp",
            City :    "Pune",
            img:      "https://i.ytimg.com/vi/1Cq96OGGq-I/maxresdefault.jpg"
        }
    ]

    return RestroList.map((data) =>{
        return(
            <div key={data.id} className="Card">
                <img className="img" src={data.img}   alt={data.name}/>
                <h3 className="Heading"> {data.name}</h3>
                <p className="location"> {data.location}</p>
                <h4 className="city"> {data.City}</h4> 
                {/* <button>Check</button> */}
                <hr/>
            </div>
        )}   
    )

};

        
    