import React from "react";
import Categories from "../Categories";
import PriceInput from "./PriceInput";
import SearchManufacturer from "./SearchManufacturer";

// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../types/hook";
import {
  setCategoryId,
  setSortName,
  setProductCard,
  setPriceMax,
  setPriceMin,
  setCheckboxManufacturer,
} from "../../redux/slices/filterSlices";

function MyAside({ create }: any) {
  const [valueMinMax, setValueMinMax] = React.useState({ min: 0, max: 10000 });
  const [checkboxTrue, setCheckboxTrue]: any = React.useState([]);

  const dispatch = useAppDispatch();
  const {
    categoryId,
    sort,
    priceMin,
    priceMax,
    checkboxManufacturer,
    productCard,
  } = useAppSelector((state: any) => state.filters);
  function addCategoriesActive(index: number) {
    dispatch(setCategoryId(index));
  }
  function filterProductAside(e: any) {
    e.preventDefault();
    create(valueMinMax, checkboxTrue);
  }
  function clearProductAside(e: any) {
    e.preventDefault();
    setValueMinMax({ min: 0, max: 10000 });
    setCheckboxTrue([]);
    create({ min: 0, max: 10000 }, []);
  }

  return (
    <aside className="main-product-body__aside">
      <div className="aside__title">ПОДБОР ПО ПАРАМЕТРАМ</div>
      <div className="aside__body">
        <form>
          <PriceInput
            valueMinMax={valueMinMax}
            setValueMinMax={setValueMinMax}
          ></PriceInput>
          <div className="aside__manufacturer">
            <div className="aside-manufacturer__title">Производитель</div>

            <SearchManufacturer
              items={productCard}
              checkboxTrue={checkboxTrue}
              setCheckboxTrue={setCheckboxTrue}
            ></SearchManufacturer>
          </div>
          <div className="aside__buttons">
            <button onClick={filterProductAside} className="aside__button-tx">
              <span>Показать</span>
            </button>
            <button onClick={clearProductAside} className="aside__button-im">
              <img src="./img/icon/Basket.svg" alt="" />
            </button>
          </div>
        </form>
        <div className="aside__stripe"></div>
        <div className="aside__categories">
          <Categories
            value={categoryId}
            addActive={addCategoriesActive}
          ></Categories>
        </div>
      </div>
    </aside>
  );
}

export default MyAside;
