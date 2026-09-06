import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([{title: '', author: ''}]);

    const [newBook, setNewBook] = useState({title: '', author: ''});

    const handleInputChange = (evt) =>{
        setNewBook({...newBook, [evt.target.name]: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({title: '', author: ''});
        
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange}/>

                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange}/>
                
                    <button type="submit">Add Book</button>
                </form>
            </div>
            {books.map((book, index) => (
                <div className="bookCardsDiv" key={index}>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </div>
            ))}
        </div>
    )
}

export default Bookshelf;