export const addComment = (postId: string, comment: string) => {
  return fetch(`${process.env.CLIENT_URL}/api/comment`, {
    method: 'POST',
    body: JSON.stringify({ postId, comment }),
  })
}
