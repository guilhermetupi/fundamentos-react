import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import styles from './Post.scss';
import { Subtitle, Rate } from './styles';

function Post(props) {
  return (
    <>
      <article
        className={props.post.removed ? styles.postDeleted : styles.post}
      >
        <PostHeader
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
          onRemove={props.onRemove}
        />
        <Subtitle>{props.post.subtitle}</Subtitle>
        <Rate>Media: {props.post.likes / 2}</Rate>
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
    removed: PropTypes.bool.isRequired,
  }),
  created: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};

export default Post;
