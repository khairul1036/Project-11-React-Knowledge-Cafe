import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({data,handleAddBookmarks,handleMarkAsRead}) => {
    const {id,title,cover,author_name,author_img,posted_date,reading_time,hashtags} = data;
    return (
        <div className='pb-10 space-y-2'>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>{author_name}</h2>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-500'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddBookmarks(data)} className='text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                {
                    hashtags.map((hashtag,idx) => <span key={idx}><a className='text-xs text-gray-500' href="">{hashtag} </a></span>)
                }
                <br/>
                <button onClick={()=>handleMarkAsRead(id,reading_time)} className='pt-5 text-purple-600 underline'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    data: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blog;