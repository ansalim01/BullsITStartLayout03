import React from "react";
import MyButton from "../components/UI/MyButton";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../types/hook";
import {
  addItem,
  removeItem,
  clearItem,
  reduceItem,
} from "../redux/slices/cartSlices";
function CartItem({ item }: any) {
  const dispatch = useAppDispatch();
  const { totalPrice, itemsCount, items } = useAppSelector(
    (state: any) => state.cart
  );
  function removeOnClick() {
    dispatch(removeItem(item.id));
  }
  function reduceOnClick() {
    items.forEach((i: any) => {
      if (i.id === item.id) {
        if (i.count === 0) {
          dispatch(removeItem(item.id));
        }
      }
    });
    dispatch(reduceItem(item.id));
  }
  function addOnClick() {
    dispatch(addItem(item));
  }
  return (
    <div className="basket-card__item">
      <div className="basket-card__bloc">
        <div className="basket-card__img">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="basket-card__body">
          <div className="basket-card__volume">
            {item.sizeType === "кг" || item.sizeType === "г" ? (
              <img src="./img/icon/box.svg" alt="" />
            ) : (
              <img src="./img/icon/whh_bottle.svg" alt="" />
            )}
            {item.sizes} {item.sizeType}
          </div>
          <div className="basket-card__name">{item.name}</div>
          <div className="basket-card__description">{item.description}</div>
        </div>
      </div>

      <div className="basket-card__counter">
        <button onClick={reduceOnClick} className="basket-card__reduce">
          -
        </button>
        <div className="basket-card__number">{item.count}</div>
        <button onClick={addOnClick} className="basket-card__add">
          +
        </button>
      </div>
      <div className="basket-card__price">{item.price * item.count} ₽</div>
      <div className="basket-card__clear">
        <MyButton onClick={removeOnClick}>
          <img src="./img/icon/Basket.svg" alt="" />
        </MyButton>
      </div>
    </div>
  );
}

export default CartItem;
