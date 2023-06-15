import Image from "next/image";

export const BookImage = ({book}) => {

 const showDetails = (bookdetails) => {};
  return (
  <aside className="p-2" onClick={() => showDetails(book)}>
    <Image
      className="max-w-fit rounded"
      src={
        book.imageLink ? book.imageLink : "https://via.placeholder.com/300x300"
      }
      width={300}
      height={300}
      alt={"book"}
    />
  </aside>)
};