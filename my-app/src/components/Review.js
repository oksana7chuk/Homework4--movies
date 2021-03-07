import React from 'react';

const Review = ({reviews})=>(
  <ul>
      {reviews.map(review=>(
      <li key={review.id}>
          <h1>Athour:{review.author} </h1>
          <p>{review.content}</p>
        </li>))}
    </ul>
);

export default Review;