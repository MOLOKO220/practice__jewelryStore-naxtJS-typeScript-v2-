import React, { useEffect, useRef, useState } from "react";
import Mailing from "../component/Mailing/Mailing";
import ProductsWrapp from "../component/ProductsWrapp/ProductsWrapp";

export default function catalog() {
  // hooks
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState([]);

  const allProducts = useRef<any[]>([]);

  // получаем данные
  useEffect(() => {
    // products
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        allProducts.current = data; //список товара в исходном виде
        setProducts(data);
      });

    // category
    fetch("http://localhost:3000/api/category")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      });
  }, []);

  function filterCategory(e: any) {
    if (e.target.value === "all") {
      setProducts(allProducts.current);
    } else {
      let a = allProducts.current.filter((el) => {
        return el.category == e.target.value;
      });
      setProducts(a);
    }
  }

  // фильтруем по цене
  function filterPrice(e: any) {
    if (e.target.value == ">") {
      // От дорогих к дешевым
      let c = [...products];
      c.sort(function (a, b) {
        return b.pricse - a.pricse;
      });
      setProducts(c);
    } else if (e.target.value == "<") {
      // От дешевых к дорогим
      let c = [...products];
      c.sort(function (a, b) {
        return a.pricse - b.pricse;
      });
      setProducts(c);
    }
  }

  return (
    <div className="Catalog">
      <section className="Catalog__first-section">
        <div className="container">
          <header>
            <select onChange={filterCategory}>
              <option>Категория</option>
              <option value="all">ВСЕ</option>
              {category.map((e) => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
            </select>

            <select onChange={filterPrice}>
              <option>Цена</option>
              <option value=">">От дорогих к дешевым</option>
              <option value="<">От дешевых к дорогим</option>
            </select>
          </header>
          <main>
            {products.map((el) => {
              return (
                <ProductsWrapp
                  id={el.id}
                  img={el.img}
                  category={el.category}
                  pricse={el.pricse}
                  title={el.title}
                  key={el.id}
                />
              );
            })}
          </main>
          <footer></footer>
        </div>
      </section>
      <Mailing />
    </div>
  );
}
