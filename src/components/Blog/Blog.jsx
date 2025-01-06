
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBooksmark,handleMarkAsRead}) => {
    // console.log(blog)
    const {title,cover,reading_time,author,author_img,posted_date}=blog
    return (
        <div>
            <h2 className='text-4xl font-bold text-[rgb(17, 17, 17)] '>{title}</h2>
            <img src={cover} alt="cover picture of the title " />
            <div className='flex justify-between my-4 items-center'>
                 <div className='flex gap-4'>
                 <img className='w-14 rounded-full' src={author_img} alt="" />
 <div className=''>
    <h2 className='text-2xl'>{author}</h2>
    <p>{posted_date}</p>
    <button onClick={()=>handleMarkAsRead(reading_time)} className='text-red-500  font-bold underline'>mark as read</button>
 </div>
                 </div>
                <div className='flex gap-2'>
     <span>{reading_time} mint red</span>
     <button onClick={()=>handleAddToBooksmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBooksmark:PropTypes.func.isRequired
}