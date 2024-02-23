import React, { useContext, useState } from "react";

const FormControl = () => {
  // const { dispatch } = useContext(CoinContext);

  // const [text, setText] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = await fetchCoin(text);
  //   console.log(data)
  //   dispatch({
  //     type:"SEARCH_COIN",
  //     payload:data
  //   })
  //   setText("")
  // };

  return (
    <>
      <form class="d-flex" role="search" 
      // onSubmit={handleSubmit}
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search "
          aria-label="Search"
          style={{ opacity: "0.5" }}
          // onChange={(e) => setText(e.target.value)}
          // value={text}
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default FormControl;
