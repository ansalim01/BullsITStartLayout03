import React from "react";

function Categories({ value, addActive }: any) {
  const items = [
    "Все",
    "Уход за телом",
    "Уход за руками",
    "Уход за лицом",
    "Уход за волосами",
  ];
  return (
    <div className="categories">
      <ul>
        {items.map((elem: string, index: number) => (
          <li
            className={index === value ? "active" : ""}
            onClick={() => addActive(index)}
            key={index}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
