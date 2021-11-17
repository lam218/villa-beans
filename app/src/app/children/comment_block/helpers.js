export function getIdFromEdges (data) {
  return data.node.id
}

export function getUsernameFromEdges (data) {
    return data.node.owner.username
  }

  export function getCommentFromEdges (data) {
    return data.node.text
  }
  
  export function gethasLikedFromEdges (data) {
    return data.node.viewer_has_liked
  }