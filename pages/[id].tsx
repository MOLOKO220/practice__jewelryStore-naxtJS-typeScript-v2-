import React, { useState, useEffect, useRef } from "react";
import ProductsWrapp from "../component/ProductsWrapp/ProductsWrapp";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../storage/mainReducer";

export const getServerSideProps = async (contstc: any) => {
  // contstc.query получаем идентификатор данной страницы (id конкретного пользователя)
  return { props: { id: contstc.query.id } };
};

export default function id(props: any) {
  // hooks
  const [thisProduct, setThisProduct] = useState<any>([]);
  const [similarProduct, setSimilarProduct] = useState<any[]>([]);
  const [render, setRender] = useState(0);

  // redux
  const dispatch = useDispatch();
  const basket: any[] = useSelector((state: any) => state.main.basket);

  // все товары
  const allProducts = useRef<any[]>([]);

  useEffect(() => {
    // получаем данные
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // все товары
        allProducts.current = data;
        // данный конкретный товар
        const item = data.filter((e: any) => {
          return e.id == props.id;
        });
        setThisProduct(item[0]);
      });
  }, [props]);

  useEffect(() => {
    // список похожих товаров
    let similarCategory = allProducts.current.filter((e) => {
      return e.category == thisProduct.category && e.id != thisProduct.id;
    });

    // отфильтровал 3 случайного товара этой же категории
    if (similarCategory.length > 3) {
      similarCategory.splice(
        Math.floor(Math.random() * similarCategory.length),
        1
      );
    }
    setSimilarProduct(similarCategory);
  }, [thisProduct]);

  function addToBasket() {
    dispatch(addToCart(thisProduct));
  }
  return (
    <section className="ProductInf">
      <div className="container">
        <main className="ProductInf">
          <img src={thisProduct.img} />
          <div>
            <div>
              <header>
                <h6>{thisProduct.title}</h6>
                <div>
                  <p>Категория: {thisProduct.category}</p>
                  <p>Бренд: {thisProduct.brand}</p>
                </div>
              </header>
              <main>{thisProduct.description}</main>
              <footer>
                <p>{thisProduct.pricse} ₽</p>
                <button onClick={addToBasket}>купить</button>
              </footer>
            </div>
          </div>
        </main>
        <footer>
          <p>Мы подготовили для вас кое-что еще</p>
          <h6>Товары, которые могут Вам понравиться</h6>
          <div>
            {similarProduct.map((el) => {
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
          </div>
        </footer>
      </div>
    </section>
  );
}
