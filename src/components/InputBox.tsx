export function InputBox() {
  return (
    <div className="pt-4 relative">
      <input
        type="text"
        id="search"
        className=" w-72 px-4 py-3 ps-5 text-sm rounded-full border border-[#352a4b] bg-[#1b1032]  dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter your domain"
        required
      />
      <button
        type="submit"
        className="text-white bg-[#221835] font-medium rounded-full text-sm px-4 py-2 absolute right-[6px] top-5 border border-[#352a4b]"
      >
        Search
      </button>
    </div>
  );
}
