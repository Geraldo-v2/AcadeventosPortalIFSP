import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

export default function EventScreen(props){
    const event = data.events.find((x) => x._id === props.match.params.id);
    if(!event){
        return <div>Evento Não Encontrado</div>
    }
    return(
        <div>
            <Link className="backlink" to="/">Voltar para o Menu</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={event.image} alt={event.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{event.name}</h1>
                        </li>
                        <li>
                            A partir {event.date}
                        </li>
                        <li>
                            Detalhes do evento: {event.description}
                        </li>
                        <li>
                            Categoria: {event.category}
                        </li>
                        <li>
                            Local do evento: {event.campus}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                   <ul>
                       <li>
                           Informacoes da faculdade
                       </li>
                   </ul>
                </div>
            </div>
        </div>
    );
}