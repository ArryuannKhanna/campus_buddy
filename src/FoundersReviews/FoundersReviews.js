import './FoundersReviews.css'
import React from 'react';
import Slider from 'react-slick';

// Import CSS styles for the carousel from slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FounderReviewsCarousel = () => {
  const founderReviews = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Janne Smith',
      position: 'Co-Founder',
      review: 'Praesent tincidunt quam eget neque congue, in tincidunt urna placerat.',
    },
    // Add more reviews as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="founder-reviews-carousel">
      <Slider {...settings}>
        {founderReviews.map((review, index) => (
          <div key={index} className="founder-review">
            <h3>{review.name}</h3>
            <p>{review.position}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FounderReviewsCarousel;
