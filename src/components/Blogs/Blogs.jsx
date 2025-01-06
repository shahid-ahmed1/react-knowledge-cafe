import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBooksmark,handleMarkAsRead}) => {
    const [blogs , setBlogs]=useState([])
    useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data =>setBlogs(data))
    },[])
    return (
        <div>
             <div className="md:w-2/3  ">
 <h2 className="text-2xl font-bold">Blogs:{blogs.length}</h2>{
    blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBooksmark={handleAddToBooksmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
 }
             </div>
        </div>
    );
};

export default Blogs;
Blogs.propTypes={
    handleAddToBooksmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}