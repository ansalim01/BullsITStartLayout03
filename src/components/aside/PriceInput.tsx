import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPriceMin, setPriceMax } from "../../redux/slices/filterSlices";
function PriceInput({ valueMinMax, setValueMinMax }: any) {
  // const [valueMin, setValueMin] = React.useState(0);
  // const [valueMax, setValueMax] = React.useState(10000);
  function addValueMin(item: any) {
    let value = item.target.value;
    if (value < 0) {
      value = 0;
    }
    // if (value > valueMax) {
    //   value = valueMax;
    // }
    setValueMinMax({ ...valueMinMax, min: value });
  }
  function addValueMax(item: any) {
    let value = item.target.value;
    if (value < 0) {
      value = 0;
    }
    // if (value < valueMin) {
    //   value = valueMin;
    // }
    setValueMinMax({ ...valueMinMax, max: value });
  }
  // const dispatch = useDispatch();
  // const { priceMin, priceMax } = useSelector(
  //   (state: any) => state.filterSlices
  // );

  // function addValueMin(item: any) {
  //   // let value = Math.max(0, parseInt(item.target.value) || 0);
  //   let value = item.target.value;
  //   if (item.target.value < 0) {
  //     value = 0;
  //   }
  //   if (item.target.value > priceMax) {
  //     value = priceMax;
  //   }
  //   dispatch(setPriceMin(value));
  // }
  // function addValueMax(item: any) {
  //   let value = item.target.value;
  //   if (item.target.value < priceMin) {
  //     value = priceMin;
  //   }
  //   dispatch(setPriceMax(value));
  // }
  // function addCategoriesActive(index: number) {
  //   dispatch(setCategoryId(index));
  // }
  return (
    <div className="aside__price">
      <div className="aside-price__title">Цена ₽</div>
      <div className="aside-price__body">
        <input onChange={addValueMin} type="number" value={valueMinMax.min} />
        <span>-</span>
        <input onChange={addValueMax} type="number" value={valueMinMax.max} />
      </div>
    </div>
  );
}

export default PriceInput;
