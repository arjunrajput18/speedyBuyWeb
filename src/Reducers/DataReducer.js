export const initialState = {
  filters: {
    searchValue: null,
    sort: null,
    selectedCategories: [],
    selectedSizes: [],
    rating: null,
    price: null,
    byStock: false,
  },
  categories: [],
  products: [],
  cart: [],
  wishlist: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "CART_OPERATIONS":
      return {
        ...state,
        cart: action.payload,
      };
    case "WISHLIST_OPERATION":
      return {
        ...state,
        wishlist: action.payload,
      };

    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SEARCH_PRODUCT":
      return {
        ...state,
        filters: { ...state.filters, searchValue: action.payload },
      };

    case "SORT_BY_PRICE":
      return {
        ...state,
        filters: { ...state.filters, sort: action.payload },
      };

    case "FILTER_BY_PRICE_RANGE":
      return {
        ...state,
        filters: { ...state.filters, price: action.payload },
      };
    case "FILTER_BY_CATEGORIES":
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedCategories: state.filters.selectedCategories.includes(
            action.payload
          )
            ? state.filters.selectedCategories.filter(
                (category) => category !== action.payload
              )
            : [...state.filters.selectedCategories, action.payload],
        },
      };

    case "FILTER_BY_SIZE":
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedSizes: state.filters.selectedSizes.includes(action.payload)
            ? state.filters.selectedSizes.filter(
                (size) => size !== action.payload
              )
            : [...state.filters.selectedSizes, action.payload],
        },
      };

    case "FILTER_BY_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };
    case "BY_STOCK":
      return {
        ...state,
        filters: {
          ...state.filters,
          byStock: !state.filters.byStock,
        },
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        filters: {
          searchValue: null,
          sort: null,
          selectedCategories: [],
          selectedSizes: [],
          rating: null,
          price: null,
          byStock: false,
        },
      };

    case "UPDATE_QTY_IN_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
