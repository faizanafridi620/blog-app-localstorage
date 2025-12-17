import React from 'react'
import { useEffect, useState } from "react";
import { createContext,useContext } from "react";

export const BlogContext = createContext();
const purgeBlog = 7 * 24 *60 *60 * 1000;

export const BlogProvider = ({children}) => {
    const [blogs,setBlogs] = useState(() => {
        try{
            const savedBlogs = localStorage.getItem("blogs")
            if(!savedBlogs || savedBlogs === "undefined"){
                return [];
            }
            return JSON.parse(savedBlogs)
        }catch(err){
            console.log("Error while getting Blogs", err);          
            return [];
        } 
    })

    const [search,setSearch] = useState("")

    useEffect(() => {
        const now = Date.now();
        const deletedBlog = blogs.filter((blog) => {
            if(!blog.deleted) return true;
            return now - blog.deletedAt < purgeBlog;
        })
        if(deletedBlog.length !== blogs.length){
            setBlogs(deletedBlog)
        }
    },[])

    useEffect(() => {
        localStorage.setItem("blogs",JSON.stringify(blogs));
    },[blogs])
    
    const addBlog = (blog) => {
        setBlogs((prev) => [...prev,{id: Date.now(),...blog,publishedDate: new Date().toISOString()  ,deleted: false,deletedAt: null}])
    }

    const editBlog = (id,blog) => {
        setBlogs((prev) => prev.map((prevBlog) => (prevBlog.id === id ? {...prevBlog,...blog} : prevBlog)))
    }

    const deleteBlog = (id) => {
        setBlogs((prev) => prev.map((prevBlog) => (prevBlog.id === id ? {...prevBlog,deleted: true, deletedAt: Date.now()} : prevBlog)))
    }


    return (
        <BlogContext.Provider value={{blogs,addBlog,editBlog,deleteBlog,search,setSearch}} >
            {children}
        </BlogContext.Provider>
    )
}


export const useBlog = () => useContext(BlogContext);

