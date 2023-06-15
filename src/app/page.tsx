"use client";
import { BookList } from "./pages/BookList/BookList";
import { BookDataProvider } from "./hooks/BookData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookDataProvider>
        <BookList />
      </BookDataProvider>
    </main>
  );
}
