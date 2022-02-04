import React from 'react';
import { LoadMoreButton } from './Button.styled';

export default function Button({ loadMore }) {
  return (
    <LoadMoreButton type="button" onClick={loadMore}>
      Load more
    </LoadMoreButton>
  );
}
