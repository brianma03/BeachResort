import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adip'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adip'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adip'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adip'
      }
    ]
  }
  //This return contains a call to the map function with the 
  //parameters of item and index that are passed from the 
  //array of the class component
  //The article tag is used to display the services separately
  render () {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
