import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className='bg-slate-200 p-4 m-4'>
            <h2 className='text-3xl'>{title}</h2>
            
        </div>
    );
};

export default Bookmark;
Bookmark.propTyps={
    bookmark:PropTypes.object.isRequired
}