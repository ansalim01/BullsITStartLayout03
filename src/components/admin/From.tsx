import React from "react";
import MyCheckbox from "./MyCheckbox";
import { useAppDispatch, useAppSelector } from "../../types/hook";

import {
  setCategoryId,
  setSortName,
  setProductCard,
  setPriceMin,
  setPriceMax,
  setCheckboxManufacturer,
  addProductCard,
  setTypeCareActive,
} from "../../redux/slices/filterSlices";

function Form() {
  const dispatch = useAppDispatch();
  let { productCard } = useAppSelector((state: any) => state.filters);

  const [formValu, setFormValu] = React.useState<any>({
    imageUrl: "",
    name: "",
    sizeType: "кг",
    sizes: "",
    manufacturer: "",
    brand: "",
    description: "",
    price: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    if (formValu.name.length === 0) {
      alert("имя, напиши что то");
      return;
    }
    const regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (!regexp.test(formValu.imageUrl)) {
      alert("img, нужна ссылка");
      return;
    }
    if (formValu.sizes.length === 0) {
      alert("Размер 1ед. товара, напиши что то");
      return;
    }
    if (formValu.brand.length === 0) {
      alert("Бренд, напиши что то");
      return;
    }
    if (formValu.manufacturer.length === 0) {
      alert("Производитель, напиши что то");
      return;
    }
    if (formValu.description.length === 0) {
      alert("Описание, напиши что то");
      return;
    }
    if (formValu.price.length === 0) {
      alert("Цена, напиши что то");
      return;
    }

    dispatch(addProductCard(formValu));
    dispatch(setTypeCareActive([0]));
    // setFormValu()

    console.log(formValu);

    console.log(formValu);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="#" id="form" className="from">
        <div className="form__item">
          <label className="form__label">
            Имя товара*
            <input
              value={formValu.name}
              onChange={(e) =>
                setFormValu({ ...formValu, name: e.target.value })
              }
              name="name"
              type="text"
              className="form__input"
            />
          </label>
        </div>
        <div className="form__item">
          <label className="form__label">
            Aдрес img*
            <input
              value={formValu.imageUrl}
              onChange={(e) =>
                setFormValu({ ...formValu, imageUrl: e.target.value })
              }
              placeholder="https://text/img.jpg"
              type="text"
              className="form__input"
            />
          </label>
        </div>
        <div className="form__item">
          <div className="form__label">Единица измерения*</div>
          <select
            className="form__select"
            value={formValu.sizeType}
            onChange={(e) => {
              console.log(e.target.value);

              return setFormValu({ ...formValu, sizeType: e.target.value });
            }}
          >
            <option value={"кг"}>Килограмм</option>
            <option value={"г"}>Грамм</option>
            <option value={"л"}>Литр</option>
            <option value={"мл"}>Миллилитр</option>
          </select>
        </div>
        <div className="form__item">
          <label className="form__label">
            Размер 1ед. товара*
            <input
              value={formValu.sizes}
              onChange={(e) =>
                setFormValu({ ...formValu, sizes: Number(e.target.value) })
              }
              placeholder="1.5"
              type="number"
              className="form__input"
            />
          </label>
        </div>
        <div className="form__item">
          <label className="form__label">
            Бренд*
            <input
              value={formValu.brand}
              onChange={(e) =>
                setFormValu({ ...formValu, brand: e.target.value })
              }
              placeholder="LAMM"
              type="text"
              className="form__input"
            />
          </label>
        </div>
        <div className="form__item">
          <label className="form__label">
            Производитель*
            <input
              value={formValu.manufacturer}
              onChange={(e) =>
                setFormValu({ ...formValu, manufacturer: e.target.value })
              }
              placeholder="LAMM"
              type="text"
              className="form__input"
            />
          </label>
        </div>
        <div className="form__item">
          <label className="form__label">
            Описание*
            <textarea
              value={formValu.description}
              onChange={(e) =>
                setFormValu({ ...formValu, description: e.target.value })
              }
              className="form__textarea"
            ></textarea>
          </label>
        </div>
        <div className="form__item">
          <label className="form__label">
            Цена*
            <input
              value={formValu.price}
              onChange={(e) =>
                setFormValu({ ...formValu, price: Number(e.target.value) })
              }
              placeholder="150"
              type="number"
              className="form__input"
            />
          </label>
        </div>

        <div className="form__item">
          <div className="form__label">Тип ухода</div>
          <MyCheckbox
            // addTypeCare={addTypeCare}
            name={"typeCare-1"}
            value={1}
            text={"Уход за руками"}
          ></MyCheckbox>
          <MyCheckbox
            // addTypeCare={addTypeCare}
            name={"typeCare-2"}
            value={2}
            text={"Уход за ногами"}
          ></MyCheckbox>
          <MyCheckbox
            // addTypeCare={addTypeCare}
            name={"typeCare-3"}
            value={3}
            text={"Уход за лицом"}
          ></MyCheckbox>
          <MyCheckbox
            // addTypeCare={addTypeCare}
            name={"typeCare-4"}
            value={4}
            text={"Уход за волосами"}
          ></MyCheckbox>
        </div>

        <button type="submit" className="form__button">
          Отправить
        </button>
        {/* onChange */}
      </form>
    </div>
  );
}

export default Form;
