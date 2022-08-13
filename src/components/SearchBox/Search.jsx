import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";

// import "./AddCustomer.css";

class Search extends Form {
  state = {
    data: {
      searchQuery: "",
    },
    error: null,
  };

  doSubmit = () => {
    console.log("this state", this.state.data);
  };

  render() {
    return (
      <Auxiliary>
        <form onSubmit={this.handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <input
              name="searchQuery"
              value={this.state.data.searchQuery}
              onChange={this.props.handleSearch}
              type="text"
              placeholder="Seacrh here..."
              className="input input-bordered w-full"
            />
          </div>
        </form>
      </Auxiliary>
    );
  }
}

export default Search;
