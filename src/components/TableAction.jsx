import remove from "../images/remove.png";
import exportIcon from "../images/exportIcon.png";
import copy from "../images/copy.png";
import search from "../images/search.png";

const TableAction = () => {
  return (
    <div className="table_header">
      <h1 className="all_user" style={{ margin: 0 }}>
        All Users
      </h1>
      <div className="table_action">
        <img
          className="action_icon"
          src={copy}
          alt="copy"
          width={20}
          height={22}
        />
        <img
          className="action_icon"
          src={exportIcon}
          alt="exportIcon"
          width={20}
          height={22}
        />
        <img
          className="action_icon"
          src={remove}
          alt="remove"
          width={20}
          height={22}
        />
        <div className="input_group">
          <img src={search} alt="search" style={{ marginRight: "18px" }} />
          <input placeholder="Search" className="search_input" />
        </div>
      </div>
    </div>
  );
};

export default TableAction;
