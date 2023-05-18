import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../../Reducers/DataReducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories })
    }
    catch (e) {
      console.error(e)
    }
  }

  const getProducts = async () => {
    try {
      const resp = await fetch("/api/products");
      const { products } = await resp.json();
      dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
    } catch (e) {
      console.error(e);
    }

  }

  useEffect(() => {
    getCategories();
    getProducts()
  }, [])

  return <DataContext.Provider value={{ state, dispatch }}>
    {children}
  </DataContext.Provider>
}

export const DataState = () => useContext(DataContext);