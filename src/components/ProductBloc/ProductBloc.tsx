import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch } from "../../types/hook";
import { Link } from "react-router-dom";
import { addItem, removeItem, clearItem } from "../../redux/slices/cartSlices";

function ProductBloc({ item }: any) {
  // const [buttonClick, setButtonClick] = React.useState(true);
  const dispatch = useAppDispatch();
  const onClickAdd = () => {
    // if (buttonClick) {
    // }else{
    //   dispatch(addItem(item));
    // }
    dispatch(addItem(item));
    // setButtonClick(!buttonClick);
  };
  return (
    <div className="main-product-body__item">
      <div className="card">
        <div className="card__img">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="card__volume">
          {item.sizeType === "кг" || item.sizeType === "г" ? (
            <img src="./img/icon/box.svg" alt="" />
          ) : (
            <img src="./img/icon/whh_bottle.svg" alt="" />
          )}
          {item.sizes} {item.sizeType}
        </div>
        <Link to={`/product/${item.id}`} className="card__name">
          {item.name}
        </Link>
        <div className="card__body">
          <div className="card__barcode">
            Штрихкод:
            <span> {item.barcode}</span>
          </div>
          <div className="card__manufacturer">
            Производитель:
            <span> {item.manufacturer}</span>
          </div>
          <div className="card__brand">
            Бренд:
            <span> {item.brand}</span>
          </div>
        </div>
        <div className="card__button">
          <div className="card__price">{item.price} ₽</div>
          <button onClick={onClickAdd} className="">
            <span>В КОРЗИНУ</span>
            <img src="./img/icon/shop.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBloc;
