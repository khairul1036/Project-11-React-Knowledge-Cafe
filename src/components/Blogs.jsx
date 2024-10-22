import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmarks,handleMarkAsRead}) => {
    const [datas, setData] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div className="w-2/3">
            {
                datas.map(data=> <Blog
                    key={data.id} 
                    data={data}
                    handleAddBookmarks={handleAddBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;