import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {

  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free cocktaile",
        info:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
      },
      {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
      },
      {
        icon:<FaShuttleVan/>,
        title:"Free shuttle",
        info:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
      },
      {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
      }

    ]
  }

  render() {
    return (
      <section className="services">
       <Title title="services"/>
       <div className="services-center">
         {
           this.state.services.map((item,index )=>{
             return <article key={index} className="service">
               <span>{item.icon}</span>
               <h6>{item.title}</h6>
              <p>{item.info}</p>
             </article>
           })
         }
       </div>
      </section>
    )
  }
}
