import React from "react";
import MyButton from "../UI/MyButton";
import { useAppDispatch, useAppSelector } from "../../types/hook";
import {
  addItem,
  removeItem,
  clearItem,
  reduceItem,
} from "../../redux/slices/cartSlices";
import {
  removeProductCard,
  setActiveSettings,
} from "../../redux/slices/filterSlices";
import FromStr from "./FromStr";

function AdminItem({ item }: any) {
  // const [open, setOpen] = React.useState(false);
  let { activeSettings } = useAppSelector((state: any) => state.filters);
  const dispatch = useAppDispatch();
  function removeOnClick() {
    dispatch(removeItem(item.id));
    dispatch(removeProductCard(item.id));
  }
  function settingsOnClick() {
    dispatch(setActiveSettings(item.id));
    // setOpen(!open);
  }
  return (
    <div className="main-admin__item">
      <div className="main-admin__hed">
        <div className="main-admin__bloc">
          <div className="main-admin__img">
            <img src={item.imageUrl} alt="" />
          </div>
          <div className="main-admin__body">
            <div className="main-admin__name">{item.name}</div>
            <div className="main-admin__volume">
              {item.sizeType === "кг" || item.sizeType === "г" ? (
                <img src="./img/icon/box.svg" alt="" />
              ) : (
                <img src="./img/icon/whh_bottle.svg" alt="" />
              )}
              {item.sizes} {item.sizeType}
            </div>
            <div className="main-admin__description">{item.description}</div>
          </div>
          <div className="main-admin__price">{item.price} ₽</div>
          <div className="main-admin__clear">
            <MyButton onClick={removeOnClick}>
              <img src="./img/icon/Basket.svg" alt="" />
            </MyButton>
            <MyButton onClick={settingsOnClick}>
              <img src="./img/icon/settings-gear-svgrepo-com.svg" alt="" />
            </MyButton>
          </div>
        </div>
      </div>
      {activeSettings === item.id ? <FromStr item={item}></FromStr> : ""}
    </div>
  );
}

export default AdminItem;
