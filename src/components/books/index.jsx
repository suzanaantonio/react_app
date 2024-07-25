import { Link } from 'react-router-dom';
import './style.css'

const Book = ({ id, title, author, cover }) => {
    return (
        <Link to={`/view/${id}`}>
            <div className='container-book'>
                <div className='book-cover'>
                    <img src={cover} alt="book cover" className='book-image' />
                </div>
                <p className='book-title'>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</p>
                <p className='book-author'>{author}</p>
            </div>
        </Link>
    )
}

export default Book;