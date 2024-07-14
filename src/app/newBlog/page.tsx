'use client'
import React,{useState} from 'react'

const page = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
  
      if (response.ok) {
        console.log('Blog post created successfully');
        // Reset the form
        setTitle('');
        setContent('');
      } else {
        console.error('Failed to create blog post');
      }
    };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-8">Write a Blog</h1>
      <div className="w-full md:w-3/6 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="p-3 font-medium text-4xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content" className="text-lg font-medium mb-2">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              
              className="p-3 border text-xl  border-gray-300 rounded-lg h-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default page