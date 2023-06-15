"use client";
// import { PopupForm } from './components/popupForm/PopupForm'
import { BookList } from "./pages/BookList/BookList";
import { BookDataProvider } from "./hooks/BookData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <PopupForm/> */}
      <BookDataProvider>
        <BookList />
      </BookDataProvider>
    </main>
  );
}
