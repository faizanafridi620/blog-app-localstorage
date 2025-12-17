import React from 'react'
import BlogForm from './BlogForm'
import { useBlog } from '../context'
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const {addBlog} = useBlog();
  const navigate = useNavigate();

  const handleAdd = (blog) => {
    addBlog(blog);
    navigate("/")
  }
  return (
    <div>
        <BlogForm onSubmit={handleAdd}/>
    </div>
  )
}

export default AddBlog