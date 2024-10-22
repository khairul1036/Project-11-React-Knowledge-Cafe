import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3">
             <h1 className='bg-[#6047EC] bg-opacity-10 text-center rounded-md py-4 font-bold text-2xl text-[#6047EC] border-2 border-[#6047EC] mb-5'>Spent time on read :  {readingTime} min</h1>
             <div className='bg-gray-300 p-5 rounded-lg'>
                <h1 className='pb-4 font-bold text-2xl'>Bookmark length: {bookmarks.length}</h1>
                {/* <Bookmark bookmarks={bookmarks}></Bookmark> */}
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)

                    // bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
                }
             </div>
        </div>
    );
}; 

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;