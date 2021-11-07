import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function PostHeader(props) {
  const { id, title, read } = props.post;

  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={() => props.onRemove(id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};

export default PostHeader;
