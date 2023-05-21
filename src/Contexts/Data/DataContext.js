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
  
  const getCarts=async ()=>{
    try {
      const response=await fetch("/api/user/cart",{
        method:"GET",
        headers:{
          authorization:localStorage.getItem("token")
        }
      })
      const data=await response.json()
      console.log(data.cart)
    
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategories();
    getProducts();
    getCarts()
  }, [])

  return <DataContext.Provider value={{ state, dispatch }}>
    {children}
  </DataContext.Provider>
}

export const DataState = () => useContext(DataContext);