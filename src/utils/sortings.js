// Core
import moment from "moment";

const parseToDate = value => moment(value, "MM/DD/YYYY").valueOf();

const sortByKey = (key = "") => (a, b) => {
  const A = key ? a[key] : a;
  const B = key ? b[key] : b;
  return A > B ? 1 : -1;
};

const sortByGrowDate = (key = "") => (a, b) => {
  const A = parseToDate(a[key]);
  const B = parseToDate(b[key]);
  return A > B ? 1 : -1;
};

export const getSortedByKey = (items = [], key = "") => {
  return [...items].sort(sortByKey(key));
};

const mapByOrder = (array, orders, key = "", orderKey = "") => {
  const sortByOrderIndex = (a, b) => {
    const A = orderKey ? a[key][orderKey] : a[key];
    const B = orderKey ? b[key][orderKey] : b[key];
    return orders.indexOf(A) > orders.indexOf(B) ? 1 : -1;
  };
  return [...array].sort(sortByOrderIndex);
};

export const getAllStatuses = (items = [], key = "") => {
  const all = items.map(a => a[key]).sort(sortByKey("length"));
  return Array.from(new Set(all));
};

const getAllUserNames = (items = [], key = "", orderKey = "") => {
  const all = items
    .map(a => a[key])
    .map(u => u[orderKey])
    .sort(sortByKey("length"));
  return Array.from(new Set(all));
};

export const getFilteredBySearch = (state, searchText) => {
  const search = searchText.toString().toLowerCase();
  const getEntry = item =>
    JSON.stringify(item)
      .toString()
      .toLowerCase()
      .includes(search);
  return state.filter(o => getEntry(o));
};

export const getSortedByStatuses = (items = [], key = "") => {
  const orders = getAllStatuses(items, key);
  return mapByOrder(items, orders, key);
};

export const getSortedByUserNames = (items = [], key = "", orderKey = "") => {
  const orders = getAllUserNames(items, key, orderKey);
  return mapByOrder(items, orders, key, orderKey);
};

export const getSortedByDate = (items = [], key = "") => {
  return [...items].sort(sortByGrowDate(key));
};
