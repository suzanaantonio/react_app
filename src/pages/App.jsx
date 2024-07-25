import { useState, useEffect } from 'react'
import './App.css'
import SideBar from '../components/sidebar'
import Book from '../components/books'
import Footer from '../components/Footer'
//import { listBook } from '../data/book'
import { getBooks } from '../service/get-book'

const MainView = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const listBookFromAPI = async () => {
    try {
      const data = await getBooks();

      if (data.error) return console.log('Error to get books on the API')

      setBooks(data.results.books);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    listBookFromAPI()
  }, [])

  const renderBook = () => {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredBooks.length === 0) {
      return <div style={{ color: "#fff", fontSize: 20 }}>Nenhum livro encontrado.</div>;
    }

    return filteredBooks.map((book, index) => (
      <Book
        key={index}
        id={book.rank}
        title={book.title}
        author={book.author}
        cover={book.book_image}
      />
    ));
  }

  return (
    <>
      {loading
        ?
        (<div style={{ marginTop: 100, display: "flex", justifyContent: "center", color: "#fff", fontSize: 20 }}>Carregando livros...</div>)
        :
        <main>
          <SideBar />
          <section className='container-section'>
            <header className='header'>
              <div className="header--wrapper">
                <div className="header--title">
                  <p><a href="">Booking</a></p>
                </div>
                <div className="user--info">
                  <div className="search--box">
                    <input value={filter} onChange={(e) => setFilter(e.currentTarget.value)} type="text" placeholder="Nome do livro"></input>
                    <button><i className="fas fa-search"></i></button>
                    <button><i className="fas fa-star"></i></button>
                  </div>
                </div>
              </div>
            </header>
            <div className='content-books'>
              {renderBook()}
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </main>
      }
    </>
  )
}

export default MainView;