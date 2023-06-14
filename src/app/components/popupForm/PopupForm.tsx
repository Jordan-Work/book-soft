export const PopupForm = () => {
  
  interface FormDetails {
      label: string,
      value: string,
      validateEmpty: boolean,
  }

  const formDetails = [
    {label: 'Name', value: '', validateEmpty: true},
    {label: 'Price', value: '', validateEmpty: true},
    {label: 'Category', value: '', validateEmpty: false},
  ] as FormDetails[]


  return (
    <section>
      <header></header>
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {formDetails.map((detail, i) => (
          <div className="mb-4" key={`${detail.value}-${i}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {detail.value}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={detail.value}/>
          </div>)
          )}
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div> */}
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Delete
            </button>
          </div>
        </form>
      </div>
      <footer></footer>
    </section>
  )
}