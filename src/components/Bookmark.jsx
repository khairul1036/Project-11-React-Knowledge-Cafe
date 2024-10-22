import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    console.log(bookmark)
    console.log(title)
    return (
        <div className="bg-gray-100 rounded-lg p-4 mb-2">
            <p className='font-bold text-2xl'>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
};

export default Bookmark;