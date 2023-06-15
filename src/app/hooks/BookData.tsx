import { createContext, useContext, useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json";
import { BookDetails } from "../types/types";

const BookContext = createContext({
  updateBook: (oldBookData: BookDetails, newBookData: BookDetails) => {},
  deleteBook: (book: BookDetails) => {},
  addBook: (book: BookDetails) => {},
  bookData: [] as BookDetails[],
});

export const BookDataProvider = ({ children }: any) => {
  const [bookData, setBookData] = useState([...MOCK_DATA] as BookDetails[]);

  useEffect(() => {
    setBookData(MOCK_DATA);
  }, []);

  const updateBook = (oldBookData: BookDetails, newBookData: BookDetails) => {
    if (!bookData.length) {
      return;
    }
    const updatedBookData = [...bookData];
    const bookIndex = updatedBookData.findIndex(
      (f) => f.title === oldBookData.title
    );
    updatedBookData[bookIndex].title = newBookData.title
      ? newBookData.title
      : updatedBookData[bookIndex].title;
    updatedBookData[bookIndex].category = newBookData.category
      ? newBookData.category
      : updatedBookData[bookIndex].category;
    updatedBookData[bookIndex].price = newBookData.price
      ? newBookData.price
      : updatedBookData[bookIndex].price;

    setBookData(updatedBookData);
  };

  const deleteBook = (book: BookDetails) => {
    const updatedBookData = bookData.filter((f) => f.id !== book.id);
    setBookData(updatedBookData);
  };

  const addBook = (book: BookDetails) => {
    const updatedBookData = [
      ...bookData,
      {
        id: Math.floor(Math.random() * 100).toString(),
        imageLink: "https://via.placeholder.com/300x300",
        category: book.category,
        title: book.title,
        price: book.price,
      },
    ];
    setBookData(updatedBookData);
  };

  return (
    <BookContext.Provider value={{ updateBook, deleteBook, addBook, bookData }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookData = () => useContext(BookContext);
