
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className=" bg-gray-200">
            <div>
                <h3 className='text-4xl'>Reading Time:{readingtime}</h3>
            </div>
            <h2>Bookmarks Blogs: {bookmarks.length}</h2>{
                 bookmarks.map(bookmark=><Bookmark bookmark={bookmark}  key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes={
bookmarks:PropTypes.array.isRequired,
readingtime:PropTypes.number
}