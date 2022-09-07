import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";

class Search extends Form {
  render() {
    return (
      <Auxiliary>
        <form>
          <div className="form-control w-full max-w-xs">
            <input
              name="searchQuery"
              value={this.props.searchQuery}
              onChange={this.props.onChange}
              type="text"
              placeholder="Seacrh here..."
              className="input input-bordered w-64 h-10 rounded-md"
            />
          </div>
        </form>
      </Auxiliary>
    );
  }
}

export default Search;
