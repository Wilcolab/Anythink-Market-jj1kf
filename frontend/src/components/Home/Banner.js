import React, { Component, useState } from "react";
import { render } from "react-dom";
import logo from "../../imgs/logo.png";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  updateQuery = (ev) => {
    this.setState({ searchQuery: ev.target.value });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="banner text-white">
          <div className="container p-4 text-center">
            <img src={logo} alt="banner" />
            <div>
              <span id="get-part">A place to get</span>
              <span>
              <textarea
                // className="form-control"
                placeholder="Search..."
                value={state.body}
                onChange={this.updateQuery}
                rows="1"
                ></textarea>
              </span>
              <span> the cool stuff.</span>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
const Banner = () => {
  const state = useState({
    body: "",
  })

  let setBody = (ev) => {
    // this.setState({ body: ev.target.value });
    console.log("setBody", ev.target.value)
  };
};

export default Banner;
