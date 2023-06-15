"use client";
import { useBookData } from "@/app/hooks/BookData";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FormDetails {
  label: "Name" | "Price" | "Category";
  value: number | string;
  validateEmpty: boolean;
}

interface Form {
  image?: string;
  alt?: string;
  details: FormDetails[];
}
interface BookDetails {
  id: string;
  imageLink: string;
  category: string;
  title: string;
  price: string;
}

interface PopupFormProps {
  popupDetails: BookDetails;
  showPopup: boolean;
  hidePopup;
  add: boolean;
}

const defaultForm = {
  id: "",
  imageLink: "",
  category: "",
  title: "",
  price: "",
};

export const PopupForm = ({
  popupDetails,
  showPopup,
  hidePopup,
  add,
}: PopupFormProps) => {
  const [form, setForm] = useState(defaultForm);

  const { updateBook, deleteBook, addBook } = useBookData();

  useEffect(() => {
    console.log("form");
    setForm(defaultForm);
  }, [popupDetails]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name, "form values");
    if (e.target.name === "price") {
      e.target.value = e.target.value
        .replace(/[^0-9.]/g, "")
        .replace(/[.](?!\d*$)/g, "");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    console.log("testing", form);
    e.preventDefault();
    updateBook(popupDetails, form);
    hidePopup();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title) {
      hidePopup();
      return;
    }

    addBook(form);
    hidePopup();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBook(popupDetails);
    hidePopup();
  };

  return (
    <>
      {showPopup ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <section className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <button className="ml-auto" onClick={() => hidePopup()}>
                      <span className="bg-transparent text-black h-6 w-6 text-4xl p-2">
                        ×
                      </span>
                    </button>
                    <form
                      action="#"
                      className="bg-white rounded px-8 pt-6 pb-6 mb-4 flex"
                      onSubmit={handleSave}
                    >
                      <aside>
                        <Image
                          src={
                            popupDetails.imageLink
                              ? popupDetails.imageLink
                              : "https://via.placeholder.com/300x300"
                          }
                          width={300}
                          height={500}
                          alt={"Picture for book"}
                        />
                      </aside>
                      <div className="flex flex-col ml-5">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                          </label>
                          <input
                            name="title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder={popupDetails.title}
                            onChange={(e) => handleChange(e)}
                            value={form.title}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                          </label>
                          <input
                            name="price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder={popupDetails.price}
                            onChange={(e) => handleChange(e)}
                            value={form.price}
                            // onChange={(e) => book.label === "Price" ? numberValidate(e) : null}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                          </label>
                          <input
                            name="category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder={popupDetails.category}
                            onChange={(e) => handleChange(e)}
                            value={form.category}
                            // onChange={(e) => book.label === "Price" ? numberValidate(e) : null}
                          />
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <button
                            onClick={(e) => handleDelete(e)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(e) =>
                              add ? handleAdd(e) : handleSave(e)
                            }
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                          >
                            {add ? "Add" : "Save"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
};
