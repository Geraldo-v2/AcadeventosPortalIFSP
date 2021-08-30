import React from 'react';
import Event from '../components/Event';
import data from '../data';

export default function HomeScreen(){
    return (
        <div>
            <div className="row center">
              {
                data.events.map(event =>(
                  <Event key={event._id} event={event}></Event>
                ))
              }
            </div>
          </div>
    );
}