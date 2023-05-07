import React, { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  return (
    <div className="rate">
      <h2>Rating: {rating}/5</h2>
      <form>
        <label>
          Rate:
          <input
            type="range"
            min="0"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </label>
      </form>
    </div>
  );
}

export default Rating;