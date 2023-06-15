import { useParams } from "react-router-dom";

import React from "react";
import { getBookInfo } from "../data/data";

const BookInfo: React.FC = () => {
  const params = useParams();
  const bookId = params.bookId ? parseInt(params.bookId) : 0;
  const book = getBookInfo(bookId);

  return (
    <div
      className="flex flex-col items-center py-6 container px-8 gap-4"
      key={book?.id}
    >
      <img className="rounded-xl" src={book?.imgUrl} alt="" />
      <ul className="bg-COMMENT w-full rounded-lg text-center md:text-left">
        <li className="list-style text-BACKGROUND text-center text-3xl text-ORANGE">
          {book?.name}
        </li>
        <li className="list-style">{book?.due}</li>
        <li className="list-style text-YELLOW text-xl">{book?.amount}</li>
        <li className=" list-style text-BACKGROUND text-xl text-justify px-3">
          {book?.desc}
        </li>
      </ul>
    </div>
  );
};

export default BookInfo;
