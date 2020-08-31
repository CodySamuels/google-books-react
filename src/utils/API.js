import axios from "axios";
const baseURL = 'https://cs-google-books-react-back.herokuapp.com'

export default {
  // Gets all books
  getSavedBooks: function () {
    return axios.get(`${baseURL}/api/findall/`, { withCredentials: true });
  },
  
  // Searches DB by ID
  getBookById: function (id) {
    return axios.get(`${baseURL}/api/search/${id}`, { withCredentials: true });
  },

  // Searches google by Title
  searchGoogle: function ({ title }) {
    return axios.get(`${baseURL}/api/googleSearch/${title}`, { withCredentials: true });
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete(`${baseURL}/api/delete/${id}`, { withCredentials: true });
  },
  // Saves a book to the database
  saveBook: function (id) {
    return axios.post(`${baseURL}/api/save/${id}`, { withCredentials: true });
  }
};
