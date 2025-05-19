'use server'
 
export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  console.log(formData)
 
  const res = await fetch('https://api.vercel.app/blog', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}