
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import tour1 from "../assets/tour1.png";
import tour2 from "../assets/tour2.png";
import tour3 from "../assets/tour3.png";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import ellipse from "../assets/ellipse.png";

export default function () {
    const data = [
        {
          image: tour1,
          title: "Santorini, Oia Greece",
          price: 2000,
          reviews: "5k Reviews",
        },
        {
          image: tour2,
          title: "Lighthouse, Bellwood",
          price: 4000,
          reviews: "5k Reviews",
        },
        {
          image: tour3,
          title: "Riverfront, Japan",
          price: 3000,
          reviews: "5k Reviews",
        },
      ];
    return (
    <Section id="tour">
        <h2>Choose Your Destination</h2>
        <img src={ellipse} alt="ellipse" className="ellipse" />
        <div className="tours">
            {
                data.map(({image,title,price,reviews},index) => {
                    return(
                        <div className="tour" key={title}>
                            <div className="image">
                                <img src={image} alt="tour" />
                                {
                                    index === 1 && (<div className="vectors">
                                    <img src={vector1} alt="vector" className="vector1" />
                                    <img src={vector2} alt="vector" className="vector2" />
                                  </div>)
                                }
                            </div>
                            <div className="info">
                                <div className="details">
                                <h4>{title}</h4>
                                <div className="price-details">
                                    <span className="price">${price}</span>
                                    <div className="reviews">
                                    <div className="stars">
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                    </div>
                                    <span className="review">{reviews}</span>
                                    </div>
                                </div>
                                </div>
                                <button>+</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Section>
  )
}

const Section = styled.section`
`;
