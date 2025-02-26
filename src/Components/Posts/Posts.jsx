import React from "react";

// eslint-disable-next-line react/prop-types
const Posts = ({ posts }) => {
  return (
    <div className="row">
      {
        // eslint-disable-next-line react/prop-types
        posts.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <div className="card-heading">
                <h3>{title}</h3>
              </div>
              <div className="card-body">
                <p>{body}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Posts;
