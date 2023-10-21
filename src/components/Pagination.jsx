import React from "react";
import next from "../images/next.png";

const Pagination = () => {
  return (
    <div className="paginate">
      <button className="rounded_btn active">01</button>
      <button className="rounded_btn">02</button>
      <img src={next} alt="next" />
    </div>
  );
};

export default Pagination;
