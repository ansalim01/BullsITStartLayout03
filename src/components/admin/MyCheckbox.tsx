import React from "react";
import { useAppDispatch, useAppSelector } from "../../types/hook";
import { pushTypeCareActive } from "../../redux/slices/filterSlices";

function MyCheckbox({ name, value, addTypeCare, text }: any) {
  const [checked, setChecked] = React.useState(false);
  const { typeCareActive } = useAppSelector((state: any) => state.filters);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (typeCareActive.includes(Number(value))) {
      setChecked(true);
    } else if (!typeCareActive.includes(Number(value))) {
      setChecked(false);
    }
  }, []);
  function onChangeInput(e: any) {
    dispatch(pushTypeCareActive(value));
    setChecked(!checked);
  }
  return (
    <div className="checkbox">
      <label className="custom-checkbox">
        <input
          onChange={onChangeInput}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
        />
        <span>{text}</span>
      </label>
      {/* <label>
        <input onChange={onChangeInput} checked={checked} type="checkbox" />
        {item[0]} ({item[1]})
      </label> */}
    </div>
  );
}
export default MyCheckbox;
