"use client";

import { PopupForm } from "@/app/components/popupForm/PopupForm";
import { useBookData } from "@/app/hooks/BookData";
import Image from "next/image";
import { useState } from "react";

interface BookDetails {
  id: string;
  imageLink: string;
  category: string;
  title: string;
  price: string;
}

interface BookList {
  books: BookDetails[];
}

export const BookList = () => {
  const { bookData: books } = useBookData();
  const [popup, setPopup] = useState({ details: {}, show: false, add: false });

  const showDetails = (book: BookDetails) => {
    setPopup({ show: true, details: book });
  };

  const hidePopup = () => {
    setPopup({ show: false, details: [] });
  };

  return (
    <section className="w-full">
      <button
        onClick={(e) => setPopup({ ...popup, show: true, add: true })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        type="button"
      >
        Add Book
      </button>
      <div className="flex flex-col">
        {books.map((book: BookDetails, i: number) => (
          <div
            key={book.id}
            onClick={() => showDetails(book)}
            className="flex flex-col sm:flex-row mb-6 bg-white shadow-md rounded"
          >
            <aside className="p-2">
              <Image
                className="max-w-fit rounded"
                src={
                  book.imageLink
                    ? book.imageLink
                    : "https://via.placeholder.com/300x300"
                }
                width={300}
                height={300}
                alt={"book"}
              />
            </aside>

            <div
              key={`${book.id}-${i}`}
              className="flex flex-col sm:ml-2 ml-[50%] 2xl:ml-[60%]"
            >
              <h1 className="p-2 text-3xl">
                <strong>{book.title}</strong>
              </h1>
              <p className="p-2 mt-auto">
                <strong>Category:</strong> <span>{book.category}</span>
              </p>
              <p className="p-2">
                <strong>Price:</strong> <span>{book.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <PopupForm
        popupDetails={popup.details}
        showPopup={popup.show}
        hidePopup={hidePopup}
        add={popup.add}
      />
    </section>
  );
};
