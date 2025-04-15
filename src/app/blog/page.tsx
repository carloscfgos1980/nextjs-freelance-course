// Dummy imports
// import { getPosts } from '@/lib/posts'
// import { Post } from '@/ui/post'
import Image from 'next/image'

export default async function Page() {
//   const posts = await getPosts()
 
  return (
    <div>
        <div>
            <p>I dont know</p>
        </div>
        <div>
            <Image
                aria-hidden
                src="/solidarity.png"
                alt="File icon"
                width={500}
                height={500}
            />
        </div>
        <div>
            <Image
            src="https://c8.alamy.com/comp/DREYNM/havana-cuba-old-classic-cars-in-the-street-in-downtown-havana-DREYNM.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            />
        </div>

      {/* {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
    </div>
  )
}