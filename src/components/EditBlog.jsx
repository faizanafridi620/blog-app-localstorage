import React from 'react'
import {useBlog} from '../context'
import {useParams, useNavigate} from 'react-router-dom'
import BlogForm from './BlogForm';

function EditBlog() {
  const {blogs,editBlog} = useBlog();
  const {id} = useParams();
  const navigate = useNavigate();

  const blogEdit = blogs.find((b) => b.id === Number(id) || b.id === id)

  if(!blogEdit){
    return <p className='text-center text-red-500 mt-10'>Blog not Found</p>
  }

  const handleEdit = (updateBlog) => {
      editBlog(blogEdit.id,updateBlog)
      navigate("/")
  }

  return (
    <div>
      <BlogForm initialData={blogEdit} onSubmit={handleEdit}/>
      </div>
  )
}

export default EditBlog