import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({blog,onDelete}) {
  return (
    <div className='border-b pb-8 mb-8'>
      {blog.image && (
        <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover rounded-lg mb-4'/>
      )}
        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{blog.title}</h2>
        <p>{new Date(blog.publishedDate).toLocaleString()}</p>
        <p className='text-gray-700 leading-relaxed mb-4'>{blog.description}</p>
        <p className='text-sm text-gray-600 mb-4'>By: <span className='font-medium'>{blog.author}</span></p>
        <div className='flex gap-3'>
            <Link to={`/edit/${blog.id}`} >
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Edit</button>
            </Link>
            <button
            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
            onClick={() => onDelete(blog.id)}
            >Delete</button>
        </div>
        </div>
  )
}

export default BlogCard