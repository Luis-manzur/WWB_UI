import React, { Component } from 'react';
import Title from '../Title/Title';
import { FaHotel, FaMobileAlt, FaMoneyBill } from 'react-icons/fa';
import { HiOutlineCursorClick } from 'react-icons/hi';
import './AboutWWB.css';

export default class AboutWWB extends Component {
    
    state = {
        benefits:[
            {
                icon: <FaHotel></FaHotel>,
                title: 'Establecimientos',
                description: 'Ponemos a tu alcance miles de establecimientos alrededor del mundo.'
            },
            {
                icon: <FaMobileAlt></FaMobileAlt>,
                title: 'Adaptable',
                description: 'Puedes realizar reservaciones desde cualquier dispositivo en cualquier parte.'
            },
            {
                icon: <FaMoneyBill></FaMoneyBill>,
                title: 'Presupuesto',
                description: 'Puedes conseguir alojamientos que se adapten a tu presupuesto y necesidades.'
            },
            {
                icon: <HiOutlineCursorClick></HiOutlineCursorClick>,
                title: 'Rápido',
                description: 'Todo esto a tan solo un par de clicks de distancia.'
            }
        ]
    }

  render() {
    return (
      <section className='benefits'>
            <Title title='Que ofrece World Wide Booking?'></Title>
            <div className='benefitsCenter'>
                {this.state.benefits.map((item, index) => {
                    return(
                        <article key={index} className ='benefit'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </article>
                    )
                })}
            </div>
      </section>
    )
  }
}
