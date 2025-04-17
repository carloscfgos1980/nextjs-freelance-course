
export default async function Page() {
    // 
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  // 
  return (
    <div>
        <h1>List of posts</h1>
        <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
        </ul>
    </div>
  )
}