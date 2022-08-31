import React from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { UPDATE_TITLE_SEARCH_TERM } from "../../constants/actionTypes";

const Banner = (props) => {
  const searchHandler = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    props.dispatch({
      type: UPDATE_TITLE_SEARCH_TERM,
      payload: { titleSearchTerm: value },
    });
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div />
        <div className="d-flex flex-row justify-content-center align-items-baseline">
          <span id="get-part">A place to get</span>
          <form className="col-7">
            <fieldset className="form-group">
              <input
                className="form-control"
                id="search-box"
                type="search"
                placeholder="Item name placeholder"
                onChange={searchHandler}
              />
            </fieldset>
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect()(Banner);
