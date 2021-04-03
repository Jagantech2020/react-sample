import { Component } from "react";
import Users from "../users/users";
class Container extends Component {
  state = {
    isCard: true,
  };
  render() {
    return (
      <div>
        <div
          className="btn btn-primary mt-3 ml-4 mb-4"
          onClick={() => this.setState({ isCard: !this.state.isCard })}
        >
          Switch Template
        </div>
        <div className="d-flex flex-wrap align-content-between justify-content-around">
          <Users isCard={this.state.isCard}></Users>
        </div>
      </div>
    );
  }
}

export default Container;
