import React, { useEffect, useState }  from 'react';
import './ReviewSection.css';
import reviews from './ReviewData.js';
import reviewpic from './review.jpeg';
import userpic from './user.png'
import Fadein from '../Framer_Components/FadeIn';
<<<<<<< HEAD
import Pullup from '../Framer_Components/Pullup';
=======
>>>>>>> 22ea4cf79d282499f1d3d4870e3940aa85378a22
export const ReviewSection = () => {
  return (
    <div className='reviewsection'>
    <div className='header'>
    <h5>Reviews</h5>
    <h2>Read Real Customer Reviews</h2>
    <h2>Honest Feedback from Satisfied</h2>
    <h2>Users</h2>
    </div>
    <div className="review-grid">
  
    <div className="column col1">
        {reviews.slice(0, 3).map((review, index) => (
          <Fadein>
          <div key={index} className="review-box">
            {review.reviewPic && (
              <div className="review-image">
                <img
                  className="review-pic"
                  src={reviewpic}
                  alt={review.title}
                />
              </div>
            )}
            <div className="review-details">
              <h3>{review.title}</h3>
              <p>{review.description}</p>
              <div className="author-section">
                <img className="profile-image" src={userpic} alt={review.name} />
                <p className="review-author">{review.name}</p>
              </div>
            </div>
          </div>
          </Fadein>
        ))}
      </div>
    
     
      <div className="column col2">
        {reviews.slice(3, 6).map((review, index) => (
          <Fadein>  <div key={index} className="review-box">
            {review.reviewPic && (
              <div className="review-image">
                <img
                  className="review-pic"
                  src={reviewpic}
                  alt={review.title}
                />
              </div>
            )}
            <div className="review-details">
              <h3>{review.title}</h3>
              <p>{review.description}</p>
              <div className="author-section">
                <img className="profile-image" src={userpic} alt={review.name} />
                <p className="review-author">{review.name}</p>
              </div>
            </div>
          </div></Fadein>

        
        ))}
      </div>
      <div className="column col3">
        {reviews.slice(6, 9).map((review, index) => (
          <Fadein>
          <div key={index} className="review-box">
            {review.reviewPic && (
              <div className="review-image">
                <img
                  className="review-pic"
                  src={reviewpic}
                  alt={review.title}
                />
              </div>
            )}
            <div className="review-details">
              <h3>{review.title}</h3>
              <p>{review.description}</p>
              <div className="author-section">
                <img className="profile-image" src={userpic} alt={review.name} />
                <p className="review-author">{review.name}</p>
              </div>
            </div>
          </div>
          </Fadein>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ReviewSection;
