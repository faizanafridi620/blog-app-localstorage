import React from 'react'
import { useBlog } from '../context'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Pages from './Pages';
import BlogCard from './BlogCard';

const blogsPerPage = 5;

function Blogs() {
    const {blogs,deleteBlog,search} = useBlog();

    const [currentPage, setCurrentPage] = useState(() => {
      return localStorage.getItem("savePage") ? Number(localStorage.getItem("savePage")) : 1;
  
    })

    useEffect(() => {
      localStorage.setItem("savePage",currentPage);

    },[currentPage]);

        const availableBlogs = blogs.filter((blog) => !blog.deleted)


    const filteredBlogs = availableBlogs.filter((blog) => {
      if(!search) return true;
      const searchValue = search.toLowerCase();
      return (
        blog.title.toLowerCase().includes(searchValue) || blog.author.toLowerCase().includes(searchValue)
      )
    })
    
    useEffect(() => {
      if(search && search.trim() !== ""){
        setCurrentPage(1);

      }
    },[search])


    useEffect(() => {
      if(filteredBlogs.length === 0) return;
      const totalPages = Math.ceil(availableBlogs.length/blogsPerPage)
      if(currentPage > totalPages){
        setCurrentPage(totalPages)
      }
    },[filteredBlogs.length,currentPage])


    const blogStart = (currentPage - 1) * blogsPerPage;

    const showBlogs =  filteredBlogs.slice(blogStart,blogStart + blogsPerPage)

    
    
  return (
    <div className='min-h-screen bg-gray-100 py-10'>
      <div className='max-w-3xl mx-auto bg-white rounded-lg shadow p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>
            My Blog
          </h1>
          <Link to="/add">
          <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
            Create New Blog
          </button>
          </Link>
        </div>

        {availableBlogs.length === 0 && (
          <p className='text-center text-red-500 mt-10'>No Blogs Available</p>
        )}

        {availableBlogs.length > 0 && filteredBlogs.length === 0 && (
          <p className='text-center text-red-500 mt-10'>No Blogs Found for Your Search</p>
        )}
        
        {showBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onDelete={deleteBlog} />
        ))}
        <Pages totalBlogs={filteredBlogs.length} blogsPerPage={blogsPerPage} currentPage={currentPage} setPage={setCurrentPage}/>
      </div>
      </div>
  )
}

export default Blogs