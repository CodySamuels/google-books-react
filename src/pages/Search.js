import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import BookCard from '../components/BookCard/'

function Books() {
    // Setting our component's initial state
    const [googleBooks, searchedBooks] = useState([])
    const [formObject, setFormObject] = useState({ title: "" })

    // Load all books and store them with setBooks
    useEffect(() => {
    }, [])

    function saveBook(e) {
        console.log(e.target.id)
        API.saveBook(e.target.id)
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title) {
            API.searchGoogle({
                title: formObject.title,
            })
                .then(res => {
                    searchedBooks('')
                    searchedBooks(res.data.items)
                    setFormObject({
                        title: "",
                        author: "",
                        synposis: "",
                        averageRating: 0,
                        image: '',
                        selfLink: '',
                    })
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Search Google Play's Library</h1>
                    </Jumbotron>
                    <div className='container'>

                    <form>
                        <Input
                            onChange={handleInputChange}
                            value={formObject.title}
                            name="title"
                            placeholder="Title (required)"
                            />
                        <FormBtn
                            disabled={!(formObject.title)}
                            onClick={handleFormSubmit}
                            >
                            Search Google Books
              </FormBtn>
                    </form>
            </div>
                </Col>
            </Row>

            <div className='container'>
            {googleBooks.length ? (
                <>
                    {googleBooks.map(book => <BookCard
                        key={book.id}
                        img={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        synopsis={book.volumeInfo.description}
                        averageRating={book.volumeInfo.averageRating}
                        selfLink={book.volumeInfo.infoLink}
                        id={book.id}
                        saveBook={saveBook}
                        />)}
                </>
            ) :''}
                </div>
        </Container>
    );
}

export default Books;