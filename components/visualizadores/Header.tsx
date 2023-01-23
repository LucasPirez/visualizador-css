import { useEffect, useState } from "react";

const Header = () => {
  const [count, setCount] = useState(200);
  const [width, setWidth] = useState(100);
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");

  const justifyModel = [
    "center",
    "space-around",
    "space-between",
    "flex-end",
    "flex-start",
  ];

  const alignModel = [
    "center",
    "stretch",
    "baseline",
    "flex-end",
    "flex-start",
  ];

  function selectJustify(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setJustifyContent(e.target.value);
  }

  function selectAlign(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setAlignItems(e.target.name);
  }

  return (
    <>
      <div className="container">
        <code>
          header &#123; <br /> height:{count}px;
          <br /> width:{width}%; <br /> justify-content:{justifyContent}; ' '
          {justifyModel.map((u) => (
            <button key={u} onClick={selectJustify} value={u}>
              {u}
            </button>
          ))}{" "}
          <br />
          align-items: {alignItems}' '
          {alignModel.map((u) => (
            <button key={u} onClick={selectAlign} name={u}>
              {u}
            </button>
          ))}
          &#125;
        </code>
      </div>
      <button onClick={() => setCount(count + 10)}>mas</button>
      <button onClick={() => setWidth(width - 10)}>menosWidth</button>

      <p>hola {count}</p>
      <button onClick={() => setJustifyContent("space-around")}>justify</button>
      <header
        style={{
          height: count,
          width: `${width}%`,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </header>
      <style jsx>
        {`
          header {
            width: 40%;
            border: 3px solid #eee;
            display: flex;
            justify-content: flex-end;
            transition: all 1s;
          }
          div {
            display: inline-block;
            width: 50px;
            height: 30px;
            background: #eee;
            margin: 1rem;
            transition: all 1s;
          }
          .container {
            width: 800px;
            background: #000;
          }
        `}
      </style>
    </>
  );
};

export default Header;
