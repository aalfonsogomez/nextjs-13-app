import { ListOfPosts } from './ListOfPosts.jsx'
import { Suspense } from 'react'

export default async function PostPage ({ params }) {
  return (
    <section>
      <Suspense fallback={<div>Cargando posts...</div>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
