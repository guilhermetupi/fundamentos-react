import React from "react";
import PropTypes from "prop-types";

function Post({ title, subtitle, likes }) {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
        <br />
        Likes: {likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  created: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default Post;
