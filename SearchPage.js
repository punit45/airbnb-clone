import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage"> 
           <div className=""SearchPage__info>
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Bed</Button>
                <Button variant="outlined">More Filter</Button>
           </div>
           <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in puri"
                title="Stay in this spacious Panda house"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free Parking . Washing Machine "
                star={4.73}
                price="₹ 780"
                total="₹ 1500"
                />
                <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in puri"
                title="Stay in this spacious Panda house"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free Parking . Washing Machine "
                star={4.73}
                price="₹ 780"
                total="₹ 1500"
                />
                <SearchResult 
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room infront of  puri beach"
                title="5 Star Luxary Apartment"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free Parking . Washing Machine "
                star={4.93}
                price="₹ 1000"
                total="₹ 10000"
                />
        </div>

    )
} 

export default SearchPage 
 