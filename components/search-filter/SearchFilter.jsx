const SearchFilter = ({ setKeyword, handleKeyPress }) => {
  return (
    <div className="sm:flex justify-between grid place-items-center mb-20 mt-5">
      <h1 className="text-slate-500 font-bold text-5xl my-5">ROBOTFRIENDS</h1>

      <form>
        <input
          className="focus:shadow-lg"
          id="search"
          type="search"
          pattern=".*\S.*"
          required
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <span className="caret"></span>
      </form>
    </div>
  );
};

export default SearchFilter;
