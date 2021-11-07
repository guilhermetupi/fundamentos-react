import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

function Post(props) {
  const { id, title, subtitle, likes, read } = props.post;

  return (
    <>
      <article>
        <PostHeader post={{ id, title, read }} onRemove={props.onRemove} />
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
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }),
  created: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};

export default Post;
