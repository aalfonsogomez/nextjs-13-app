import { LikeButton } from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return (posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
  )
}
