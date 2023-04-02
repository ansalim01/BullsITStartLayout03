import React from "react";

function Sorting({ value, addActive }: any) {
  const sortingList = [
    { name: "по цене (по убыванию)", sortProperty: "price" },
    { name: "по цене (по возрастанию)", sortProperty: "-price" },
    { name: "по названию (по убыванию)", sortProperty: "name" },
    { name: "по названию (по возрастанию)", sortProperty: "-name" },
  ];
  const sortRef = React.useRef(null);
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  function toggleVisiblePopup() {
    setVisiblePopup(!visiblePopup);
  }

  React.useEffect(() => {
    function handleOutsideClick(e: any) {
      if (!e.composedPath().includes(sortRef.current)) {
        setVisiblePopup(false);
        console.log(123);
      }
    }

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="main-product__sorting sorting">
      <div className="sorting">
        <div className="sorting__label" onClick={() => toggleVisiblePopup()}>
          <b>Сортировка:</b>
          <span>{value.name}</span>
          <div className="sorting__arrow">
            <img src="./img/icon/Polygon 5.svg" alt="" />
          </div>
        </div>
        {visiblePopup && (
          <div className="sorting__popup">
            <ul>
              {sortingList.map((item: any, index: number) => (
                <li
                  className={item.name === value.name ? "active" : ""}
                  onClick={() => addActive(item)}
                  key={`${item}_${index}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sorting;
