import Link from "next/link";
import { useEffect, useRef } from "react";
import style from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { incrementReducer } from "../../storage/mainReducer";
import { decrementReducer } from "../../storage/mainReducer";

export default function Header() {
  let allPricse = 0;

  // hooks
  const mobMenu = useRef<HTMLDivElement>(null);
  const basket = useRef<HTMLDivElement>(null);
  const basketBtn = useRef<HTMLImageElement>(null);

  // redux
  const dispatch = useDispatch();
  const itemsInBasket: any[] = useSelector((state: any) => state.main.basket);

  // mob
  function showMobManu() {
    mobMenu.current!.classList.add(style.active);
  }

  function hideMobManu() {
    mobMenu.current!.classList.remove(style.active);
  }

  // basket
  function showBasket() {
    basket.current!.classList.add(style.active);
  }

  function closeBasket() {
    basket.current!.classList.remove(style.active);
  }

  function increment<HTMLButtonElement>(e: any) {
    dispatch(incrementReducer(e.target.dataset.id));
  }
  function decrement<HTMLButtonElement>(e: any) {
    dispatch(decrementReducer(e.target.dataset.id));
  }

  // анимация добавления в корзину
  useEffect(() => {
    basketBtn.current!.classList.add(style.basket_active);
    setTimeout(() => {
      basketBtn.current!.classList.remove(style.basket_active);
    }, 300);
  }, [itemsInBasket]);

  return (
    <header className={style.Header}>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/catalog">Каталог</Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <img src="logo.svg" />
        <label>
          <input type="text" placeholder="Поиск" />
          <img src="search.svg" />
        </label>
        <img
          src="nav-btn.svg"
          className={style.nav_btn}
          onClick={showMobManu}
        />
        <div className={style.basket_wrapp}>
          <img
            ref={basketBtn}
            src="basket.svg"
            className={style.basket_btn}
            onClick={showBasket}
          />
          <div className={style.basket} ref={basket}>
            <header>
              <h6>Ваша корзина</h6>
              <img src="closeBtn.svg" alt="close btn" onClick={closeBasket} />
            </header>
            <main>
              {itemsInBasket.map((e) => {
                allPricse = allPricse + e.pricse * e.number;
                return (
                  <div key={e.id}>
                    <h6>{e.title} </h6>
                    <p>{e.category}</p>
                    <p>{e.number}</p>
                    <p>{e.pricse * e.number} ₽</p>
                    <div>
                      <button data-id={e.id} onClick={increment}>
                        +
                      </button>
                      <button data-id={e.id} onClick={decrement}>
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
            </main>
            <footer>
              <div>{allPricse} ₽</div>
              <button>Заказать</button>
            </footer>
          </div>
        </div>
      </div>
      <div className={style.mob__menu} ref={mobMenu}>
        <header>
          <img src="logo.svg" />
          <img src="close-btn.svg" onClick={hideMobManu} />
        </header>
        <nav>
          <ul>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/catalog">Каталог</Link>
            </li>
          </ul>
        </nav>
        <footer>
          <a href="#">
            <img src="youtube.svg" />
          </a>
          <a href="#">
            <img src="twitter.svg" />
          </a>
          <a href="#">
            <img src="fecebook.svg" />
          </a>
          <a href="#">
            <img src="vk.svg" />
          </a>
          <a href="#">
            <img src="E.svg" />
          </a>
        </footer>
      </div>
    </header>
  );
}
