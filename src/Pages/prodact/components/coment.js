import React, { useState } from "react";

function Comment() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment); // In this example, we'll just log the comment to the console
    setComment("");
  };

  return (
    <div className="comment">
      <h2 className="com1">Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <label className="lap1">
         Comment:
<textarea value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit" className="boot2">Submit Comment</button>
      </form>
    </div>
  );
}

export default Comment;
