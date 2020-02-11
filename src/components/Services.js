import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state= {
    services: [
     {
        icon: <FaCocktail/>,
        title:'Free cocktails',
        info: 'fheeh eie eiei dsjdsjdhdhdhsksjdjskjdhjs'
     },
     {
        icon: <FaHiking/>,
        title:'Endless Hiking',
        info: 'fheeh eie eiei dsjdsjdhdhdhsksjdjskjdhjs'
     },
     {
        icon: <FaShuttleVan/>,
        title:'Free Shuttle',
        info: 'fheeh eie eiei dsjdsjdhdhdhsksjdjskjdhjs'
     },
     {
        icon: <FaBeer/>,
        title:'Strongest Beer',
        info: 'fheeh eie eiei dsjdsjdhdhdhsksjdjskjdhjs'
    }
   ]
  }

    render() {
        return (
            <section className='services'>
              <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index)=> {
                       return (
                          <article key={index} className='service'>
                              <span>{item.icon}</span>
                              <h6>{item.title}</h6>
                              <p>{item.info}</p>
                          </article>
                       );
                    })}
                 </div>  
            </section>
                      
        );
       
    }
}
