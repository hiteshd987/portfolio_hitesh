import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  { id: 1, title: 'January 2022' },
  { id: 2, title: 'February 2022' },
  { id: 3, title: 'March 2022' },
];

const Timeline = ({item}) => {
    <section>
        <div>
            {item.title}
            dhfgjksdh
        </div>
    </section>
}

const About = () => {
  return (
    <div>{
        items.map(item => (
            <Timeline item={item} key={item.id}/>
        )) 
    }</div>
  );
};

export default About;
