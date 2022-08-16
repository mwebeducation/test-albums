import React from 'react'

export async function getStaticProps () {
  const controller = new AbortController();
  const signal = controller.signal;
  const res = await fetch('https://jsonplaceholder.typicode.com/albums', signal)

  const posts = await res.json();

  posts && controller.abort();

  console.log(posts)
  return {
    props: {
      posts
    }
  }
}
const index = ({posts}) => {
  return (
    <div>
      {
        posts?.map(albums => <h3 key={albums.id}>{albums.title}</h3>)
      }
    </div>
  )
}

export default index