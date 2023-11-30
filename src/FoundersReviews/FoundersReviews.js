import './FoundersReviews.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fadein from '../Framer_Components/FadeIn';
import Pullup from '../Framer_Components/Pullup';
import userpic from './user.png'

const FounderReviewsCarousel = ({ founderReviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 items at once
    slidesToScroll: 1,
  };

  return (
    <Fadein>
      <Pullup>
        <div className="founder-reviews-carousel" style={{ width: '80%', margin: '0 auto 20px' }}>
          <Slider {...settings}>
            {founderReviews.map((review, index) => (
              <div key={index} className="founder-review">
                <div className="profile-photo">
                <img className="profile-image" src={userpic} alt={review.name} />
                </div>
                <h3>{review.name}</h3>
                <p>{review.position}</p>
                <p>{review.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </Pullup>
    </Fadein>
  );
};

const App = () => {
  const firstandsecondFounderReviews = [
    {
       // Add the URL to the profile photo
      name: 'John Doe',
      position: 'Founder & CEO',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      position: 'Co-Founder',
      review: 'Praesent tincidunt quam eget neque congue, in tincidunt urna placerat.',
    },
    // Add more reviews as needed
  ];

  const thirdandfourthFounderReviews = [
    {
      name: 'Alice Johnson',
      position: 'CTO',
      review: 'Vestibulum vel purus nec tortor egestas varius.',
    },
    {
      name: 'Bob Williams',
      position: 'Lead Developer',
      review: 'Suspendisse potenti. Nulla facilisi.',
    },
    // Add more reviews as needed
  ];

  return (
    <div>
      <FounderReviewsCarousel founderReviews={firstandsecondFounderReviews} />
      <FounderReviewsCarousel founderReviews={thirdandfourthFounderReviews} />
    </div>
  );
};

export default App;
