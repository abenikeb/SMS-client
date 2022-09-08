import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Form from "../../components/Form/Form";
import { getCustomers, getCategories } from "../../services/customerServices";
import Modal from "../../components/UI/Modal/Modal";
import List from "./List/List";
import paginate from "../../components/utils/paginate";
import ViewCustomer from "../../components/Customer/ViewCustomer";

class Customer extends Form {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      categories: [],
      currentPage: 1,
      pageSize: 5,
      searchQuery: "",
      viewModal: false,
      sortColumn: { path: "name", order: "acs" },
    };
  }

  async componentDidMount() {
    const { data: customers } = await getCustomers();
    const { data: categories } = await getCategories();
    this.setState({ customers, categories: categories.result });
  }

  handlePageChange = (page) => {
    this.setState((prevState, props) => {
      return {
        currentPage: page,
      };
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleModalClose = () => {
    this.setState({ viewModal: false });
  };

  handleOpenModal = () => {
    this.setState({ viewModal: true });
  };

  handleSearch = ({ target }) => {
    this.setState({ searchQuery: target.value, currentPage: 1 });
  };

  render() {
    const {
      customers: allCustomers,
      currentPage,
      pageSize,
      searchQuery,
    } = this.state;

    let filtered = allCustomers;

    if (searchQuery) {
      filtered = allCustomers.filter((m) =>
        m.first_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    let paginateItems = paginate(filtered, currentPage, pageSize);
    const itemsSize = filtered.length;

    return (
      <Auxiliary>
        <List
          onHandlePageChange={this.handlePageChange}
          sortColumns={this.state.sortColumn}
          onSort={this.handleSort}
          openModals={this.handleOpenModal}
          onSearch={this.handleSearch}
          currentPage={currentPage}
          pageSize={pageSize}
          searchQuery={searchQuery}
          itemsSize={itemsSize}
          paginateItems={paginateItems}
        />
        <Modal show={this.state.viewModal} closeModal={this.handleModalClose}>
          <ViewCustomer />
        </Modal>
      </Auxiliary>
    );
  }
}

export default Customer;
