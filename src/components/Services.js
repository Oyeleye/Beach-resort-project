import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state= {
    services: [
     {
        icon: <FaCocktail/>,
        title:'Free cocktails',
        info: 'Here, you get to enjoy the best free cocktails there is! We look forward to serving you, just the way you like it!'
     },
     {
        icon: <FaHiking/>,
        title:'Endless Hiking',
        info: 'Whether you like to hike or love to hike, we have plenty of options for all ability levels and levels of adventure!'
     },
     {
        icon: <FaShuttleVan/>,
        title:'Free Shuttle',
        info: 'Our 24-hour shuttle bus runs every 20 to 25 minutes to and from the airport, and it is free!'
     },
     {
        icon: <FaBeer/>,
        title:'Strongest Beer',
        info: 'We have the best and strongest beer. We know you have to try this, so we will serve you just the way you like it!'
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
