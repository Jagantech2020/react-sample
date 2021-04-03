import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row bg-secondary text-white p-3">
          <div className="flex-grow-1 m-2 pr-4">logo</div>
          <div className="d-flex flex-wrap">
          <div className="m-2">About us</div>
          <div className="m-2">Services</div>
          <div className="m-2">Contact us</div>
          </div>
       
      </div>
    );
  }
}

export default Header;
