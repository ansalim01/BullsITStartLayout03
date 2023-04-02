import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
///
import { useAppDispatch, useAppSelector } from "./types/hook";
import axios from "axios";
import { setProductCard } from "./redux/slices/filterSlices";
// import { useSelector, useDispatch } from "react-redux";
// const SeatchContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  let {
    categoryId,
    sort,
    priceMin,
    priceMax,
    checkboxManufacturer,
    productCard,
  } = useAppSelector((state: any) => state.filters);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setIsLoading(true);
    // const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    // const sortBy = sort.sortProperty.replace("-", "");
    // const category = categoryId > 0 ? `typeCare=${categoryId}` : "";
    console.log(productCard);
    if (productCard.length === 0) {
      axios
        .get(
          `https://641c4d981a68dc9e4605ef50.mockapi.io/items?`
          // ${category}&sortBy=${sortBy}&order=${order}
          // ${category}&
        )
        .then((res) => {
          dispatch(setProductCard(res.data));
          // localStorage.setItem("poductListLS", res.data);
          setIsLoading(false);
        });
    } else {
      // dispatch(setProductCard(productCard));
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        {/* <SeatchContext.Provider value={}> */}
        <div className="wrapper__container _container">
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            <Route path={"product"}>
              <Route path={":id"} element={<Product />}></Route>
            </Route>
          </Routes>
        </div>
        {/* </SeatchContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
