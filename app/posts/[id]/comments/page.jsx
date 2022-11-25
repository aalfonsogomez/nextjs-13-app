
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

export default async function Comment ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#eee', fontSize: '10px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
