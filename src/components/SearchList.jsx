import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";


const SearchList = () => {
  return (
    <>
      <li
        className="list-group-item  "
        style={{
          margin: "20px 30px 0px 30px ",
          height: "100px",
          backgroundColor: "#5C8374",
          color: "white",
          border: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ display: "flex" }}>
          <img style={{ borderRadius: "10px" }} src="" alt="" />
          <span style={{ marginLeft: "40px" }}>
            <h5></h5>
            <p class=""></p>
          </span>
        </span>
       

        <button
          style={{ height: "40px", borderRadius: "20px" }}
          className="btn btn-outline-light"
        >
          Know more
          <NavigateNextIcon />
        </button>
      </li>
    </>
  );
};

export default SearchList;
