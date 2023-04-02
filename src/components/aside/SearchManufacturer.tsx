import { mixin } from "lodash";
import React from "react";
import Input from "./Input";

function SearchManufacturer({ items, checkboxTrue, setCheckboxTrue }: any) {
  const [showAll, setShowAll] = React.useState(true);
  const [inputText, setInputText] = React.useState("");

  function toggleShowAll() {
    setShowAll(!showAll);
  }

  let countManufacturer: any = {};
  items.forEach(function (i: any) {
    countManufacturer[i.manufacturer] =
      (countManufacturer[i.manufacturer] || 0) + 1;
  });
  let sortable: any = [];
  for (var vehicle in countManufacturer) {
    sortable.push([vehicle, countManufacturer[vehicle]]);
  }
  sortable
    .sort(function (a: any, b: any) {
      return a[1] - b[1];
    })
    .reverse();

  sortable = sortable.filter((i: any) =>
    i[0].toLowerCase().includes(inputText.toLowerCase())
  );
  function searchManufacturer(e: any) {
    setInputText(e.target.value);
  }

  function addCeget(e: any, item: any) {
    if (e.target.checked) {
      setCheckboxTrue([...checkboxTrue, item[0]]);
    } else {
      setCheckboxTrue(checkboxTrue.filter((i: any) => i !== item[0]));
    }
  }

  return (
    <div className="aside-manufacturer__body">
      <div className="aside-manufacturer__search">
        <input
          value={inputText}
          onChange={searchManufacturer}
          type="text"
          placeholder="Поиск..."
        />
        <div>
          <img src="./img/icon/lypa.svg" alt="" />
        </div>
      </div>
      {sortable.map((item: any, index: number) => {
        if (showAll && index > 3) return;
        return (
          <Input
            key={index}
            item={sortable[index]}
            addCeget={addCeget}
            inputText={inputText}
          ></Input>
          // <div className="" key={index} item={sortable[index]}>
          //   <label>
          //     <input onChange={test} type="checkbox" />
          //     {item[0]} ({item[1]})
          //   </label>
          // </div>
        );
      })}
      <div onClick={toggleShowAll} className="aside-manufacturer__label">
        <span>Показать все</span>
        <div className="aside-manufacturer__arrow">
          <img src="./img/icon/Polygon 5.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SearchManufacturer;
