import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ViewBook = () => {
    const [singleBook, setSingleBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        // Função para buscar dados da API
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SJbolrrpzGpfLa8pGS1JSrfm2G20QAbG');
                const data = await response.json();

                console.log(data.results.books.find((book) => {
                    if (book.rank == id) {
                        setSingleBook(book);
                    }
                }))

                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, [id]);

    if (loading) {
        return (
            <div className='loader'></div>
        );
    }

    if (!singleBook) {
        return <div>Book not found</div>;
    }

    return (
        <>
            <div style={{ marginLeft: 20, marginTop: 20 }}>
                <Link to='/home'>{"<<-"}Voltar</Link>
            </div>
            <div className="book-detail">
                <div className="book-image">
                    <img src={singleBook.book_image} alt={singleBook.title} />
                </div>
                <div className="book-info">
                    <h2>{singleBook.title}</h2>
                    <p style={{ fontSize: 15 }}>Autor: {singleBook.author}</p>
                    <p style={{ fontSize: 15 }}>Publicador: {singleBook.publisher}</p>
                    <p style={{ fontSize: 15 }}>Descricao: {singleBook.description}</p>
                    <p style={{ fontSize: 15 }}>Semanas na lista: {singleBook.weeks_on_list}</p>
                    <p style={{ fontSize: 15 }}>ISBN-13: {singleBook.primary_isbn13}</p>
                    <div className="buy-links">
                        <h4>Pode comprar esse livro em:</h4>
                        <ul>
                            {singleBook.buy_links.map(link => (
                                <li key={link.name}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewBook;