import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.img} className="card--image"/>
            <nav className="card--location">
                <h2>{props.item.country}</h2>
                <a href={props.item.location}>View on Google Maps</a>
            </nav>
            <h2 className="title">{props.item.place}</h2>
            <p>{props.item.paragraph}</p>
        </div>
    )
}