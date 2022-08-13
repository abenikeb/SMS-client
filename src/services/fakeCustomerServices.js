import * as categoryApi from "./fakeCategoryService";

const cutomers = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    fullName: "Terminator",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    tel: "0913228892",
    city: "Addis Ababa",
    email: "abenikeb79@gmail.com",
    territory: "Kolfe",
    customerType: "",
    approvedBy: "Abenezer Kebede",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    fullName: "Terminator",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    tel: "0913228892",
    city: "Addis Ababa",
    email: "abenikeb79@gmail.com",
    territory: "Kolfe",
    customerType: "",
    approvedBy: "Abenezer Kebede",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    fullName: "Terminator",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    tel: "0913228892",
    city: "Addis Ababa",
    email: "abenikeb79@gmail.com",
    territory: "Kolfe",
    customerType: "",
    approvedBy: "Abenezer Kebede",
  },
];

export function getCustomers() {
  return cutomers;
}

export function getCustomer(id) {
  return cutomers.find((m) => m._id === id);
}

export function saveCustomer(customer) {
  let customerInDb = cutomers.find((m) => m._id === customer._id) || {};
  customerInDb.fullName = customer.fullName;
  customerInDb.category = categoryApi.categories.find(
    (g) => g._id === customer.categoryId
  );
  customerInDb.tel = customer.tel;
  customerInDb.city = customer.city;
  customerInDb.email = customer.email;
  customerInDb.territory = customer.territory;
  customerInDb.customerType = customer.customerType;
  customerInDb.approvedBy = customer.approvedBy;

  if (!customerInDb._id) {
    customerInDb._id = Date.now();
    cutomers.push(customerInDb);
  }

  return customerInDb;
}

export function deleteCustomer(id) {
  let movieInDb = cutomers.find((m) => m._id === id);
  cutomers.splice(cutomers.indexOf(movieInDb), 1);
  return movieInDb;
}
