import React from 'react'

export default function Event(props){
    const { event } = props;
    return(
        <div key={event._id} className="card">
            <a href={`/event/${event._id}`}>
                <img className="medium" src={event.image} alt={event.name}/>
            </a>
            <div className="card-body">
                <a href={`/event/${event._id}`}>
                    <h2>{event.name}</h2>    
                </a>
                <div className="description">{event.description}</div>
                <div className="date">A partir de {event.date}</div>
                <div className="campus">{event.campus}</div>
            </div>
        </div>
    );
}