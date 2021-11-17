import React from 'react'
import Comment from './children/comment'
import { getIdFromEdges } from './helpers';
import styles from './styles';

const CommentBlock = (props) => {
    const {data} = props;
  return <div style={styles.commentBlock}>
{data.edges.map(comment => <Comment key={getIdFromEdges(comment)} comment={comment} />)}
  </div>
}

export default CommentBlock
