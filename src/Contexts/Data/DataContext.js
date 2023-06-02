import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../../Reducers/DataReducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
const [loading,setLoading]=useState(true)
const [firstproduct, setProduct] = useState({});

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories })
    }
    catch (e) {
      console.error(e)
    }finally{
      setLoading(false)
    }
  }

  const getProducts = async () => {
    try {
      const resp = await fetch("/api/products");
      const { products } = await resp.json();
      dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
    } catch (e) {
      console.error(e);
    }finally{
      setLoading(false)
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
    
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    getCategories();
    getProducts();
    getCarts()
  }, [])

  return <DataContext.Provider value={{ state, dispatch,loading,setLoading ,setProduct,firstproduct}}><> {children}</>
   
  </DataContext.Provider>
}

export const DataState = () => useContext(DataContext);