import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../types/hook";
// import {
//   pushCheckboxManufacturer,
//   filterCheckboxManufacturer,
// } from "../../redux/slices/filterSlices";

function Input({ item, addCeget, inputText }: any) {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useAppDispatch();
  const { checkboxManufacturer } = useAppSelector(
    (state: any) => state.filters
  );

  React.useEffect(() => {
    if (checkboxManufacturer.includes(item[0])) {
      setChecked(true);
    } else if (!checkboxManufacturer.includes(item[0])) {
      setChecked(false);
    }
  }, [checkboxManufacturer, inputText]);
  function onChangeInput(e: any) {
    setChecked(!checked);
    addCeget(e, item);
  }
  return (
    <div className="">
      <label>
        <input onChange={onChangeInput} checked={checked} type="checkbox" />
        {item[0]} ({item[1]})
      </label>
    </div>
  );
}

export default Input;
