import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ListItems = ({ coin }) => {
  console.log(coin.item);
  const { name, data, small } = coin.item;
  return (
    <li
      className="list-group-item  "
      style={{
        margin: "20px 30px 0px 30px ",
        height: "auto",
        backgroundColor: "#8BA888",
        color: "white",
        border: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ display: "flex" }}>
        <img style={{ borderRadius: "10px" }} src={small} alt="" />
        <span style={{ marginLeft: "20px" }}>
          <h5>{name}</h5>
          <p class=""></p>
          <h6>{data.price}</h6>
        </span>
      </span>
      {/* <span */}
        {/* style={{ */}
          {/* // marginLeft:"10px",
          // display: "flex",
          // flexDirection: "row",
          //   alignItems: "self-start", */}
        {/* }} */}
      {/* > */}
        {/* <CurrencyRupeeIcon /> */}
        {/* <h6>{data.price}</h6> */}
      {/* </span> */}

      <button
        style={{ height: "40px", borderRadius: "20px" }}
        className="btn btn-outline-light"
      >
        Know more
        <NavigateNextIcon />
      </button>
    </li>
  );
};

export default ListItems;
