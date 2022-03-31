import React, { Component } from 'react';
import Title from '../Title/Title';
import { FaHotel, FaMobileAlt, FaMoneyBill } from 'react-icons/fa';
import { HiOutlineCursorClick } from 'react-icons/hi';
import './AboutWWB.css';

export default class AboutWWB extends Component {
    
    state = {
        results:[
            {
                icon: <FaHotel></FaHotel>,
                title: 'Accommodations Everywhere',
                description: 'Every accommodation around the world at your fingertips.'
            },
            {
                icon: <FaMobileAlt></FaMobileAlt>,
                title: 'Pervasive',
                description: 'Book reservation at any time, anywhere.'
            },
            {
                icon: <FaMoneyBill></FaMoneyBill>,
                title: 'Budget Friendly',
                description: 'Find accommodations to suit your budget and needs.'
            },
            {
                icon: <HiOutlineCursorClick></HiOutlineCursorClick>,
                title: 'Instant',
                description: 'Everything just a couple of clicks away.'
            }
        ]
    }

  render() {
    return (
      <section className='benefits'>
            <Title title='What do we offer?'></Title>
            <div className='benefitsCenter'>
                {this.state.results.map((item, index) => {
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
