import React from 'react'
import styled from 'styled-components'
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import Button from "./Button";


export default function Destination() {
    const data = [
        {
          name: "Cuba City",
          image: cuba,
        },
        {
          name: "Paris",
          image: paris,
        },
        {
          name: "Japan",
          image: japan,
        },
      ];

    return (
    
    <Section id='destination'>
        <div className="info">
            <h2>
                top <span>Destinations</span> in the worldnp
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda voluptate dolor.
            Perferendis deserunt quidem suscipit unde, voluptatem excepturi maxime minima.</p>
            <Button text={'discover more'}/>
        </div>
        <div className='destinations'>
            {
                data.map(({name,image},index) =>{
                    return <div className='destination' key={indexedDB}>
                        <div className='image'>
                            <img src={image} alt={name} />
                        </div>
                        <div className='name'>
                            <h3>{name}</h3>
                        </div>
                    </div> ;
                })
            }
        </div>
        
    </Section>
  )
}

const Section = styled.section`
    display:flex;
    gap: 5rem;
    .info{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: flex-start;
        gap: 3rem;
        h2{
            font-size: 3rem;
            line-height: 3rem;
            span{
                color: var(--primary-color);            }
        }
        p{
            color: var(--secondary-text);
        }
    }
    .destinations{
        flex:2;
        display: flex;
        gap: 2rem;
        .destination{
            position: relative;
            img{
                height:20rem;
                width:10rem;
            }
        }
        .name{
            position:absolute;
            bottom:0rem;
            height:100%;
            width:100%;
            background: linear-gradient(
                to bottom,
                #ffffff14,
                #000000ae
            );
            display: flex;
            flex-direction: column-reverse;
            h3 {
                margin-left: 1rem;
                font-size: 1.5rem;
                color: white;
            }
        }
    }
`;


/*
  
      .name {
        position: absolute;
        bottom: 0rem;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        );
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }*/