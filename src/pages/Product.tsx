import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import MyButton from "../components/UI/MyButton";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../types/hook";
import {
  addItem,
  removeItem,
  clearItem,
  reduceItem,
} from "../redux/slices/cartSlices";

function Product() {
  const { id } = useParams();
  const [productItem, setProductItem]: any = React.useState({});
  let { productCard } = useAppSelector((state: any) => state.filters);
  React.useEffect(() => {
    let results = productCard.filter((item: any) => item.id === Number(id));
    setProductItem(results[0]);
    // axios
    //   .get(`https://641c4d981a68dc9e4605ef50.mockapi.io/items?id=${id}`)
    //   .then((res) => {
    //     setProductItem(res.data[0]);
    //   });
  }, [id]);

  const dispatch = useAppDispatch();
  const { totalPrice, itemsCount, items } = useAppSelector(
    (state: any) => state.cart
  );

  function reduceOnClick() {
    items.forEach((i: any) => {
      if (i.id === productItem.id) {
        if (i.count === 0) {
          dispatch(removeItem(productItem.id));
        }
      }
    });
    dispatch(reduceItem(productItem.id));
  }
  function addOnClick() {
    dispatch(addItem(productItem));
  }
  let counter = 0;
  items.forEach((i: any) => {
    if (i.id === productItem.id) {
      counter = i.count;
    }
  });
  return (
    <div>
      <Header></Header>
      <main className="main">
        <div className="main-product-item">
          <div className="main-product-item__img">
            <img src={productItem.imageUrl} alt="" />
          </div>
          <div className="main-product-item__body">
            <div className="main-product-item__status">В наличии</div>
            <div className="main-product-item__name">
              BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот
            </div>
            <div className="main-product-item__volume">
              {productItem.sizeType === "кг" || productItem.sizeType === "г" ? (
                <img src="../img/icon/box.svg" alt="" />
              ) : (
                <img src="../img/icon/whh_bottle.svg" alt="" />
              )}
              {productItem.sizes} {productItem.sizeType}
            </div>
            <div className="main-product-item__line">
              <div className="main-product-item__price">
                {productItem.price} ₽
              </div>
              <div className="main-product-item__counter">
                <button
                  className="main-product-item__reduce"
                  onClick={reduceOnClick}
                >
                  -
                </button>
                <div className="main-product-item__number">{counter}</div>
                <button className="main-product-item__add" onClick={addOnClick}>
                  +
                </button>
              </div>
              <div className="main-product-item__clear">
                <MyButton
                  onClick={addOnClick}
                  text={"В КОРЗИНУ"}
                  st={"buttonTx"}
                >
                  <img src="../img/icon/shop.svg" alt="" />
                </MyButton>
              </div>
            </div>
            <div className="card__body">
              <div className="card__barcode">
                Штрихкод:
                <span> {productItem.barcode}</span>
              </div>
              <div className="card__manufacturer">
                Производитель:
                <span> {productItem.manufacturer}</span>
              </div>
              <div className="card__brand">
                Бренд:
                <span> {productItem.brand}</span>
              </div>
            </div>
            <div className="main-product-item__description">
              <h3>Описание</h3>
              <span>{productItem.description}</span>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Product;
