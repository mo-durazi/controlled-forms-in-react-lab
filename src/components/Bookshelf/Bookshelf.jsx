import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([{title: '', author: ''}]);

    const [newBook, setNewBook] = useState({title: '', author: ''});

    const handleInputChange = (evt) =>{
        setNewBook({...newBook, [evt.target.name]: evt.target.value});
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form action="">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange}/>

                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange}/>
                
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )
}

export default Bookshelf;