import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.Footer}>
      <div className="container">
        <main>
          <div>
            <h6>Полезные ссылки</h6>
            <ul>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Акции</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          <div>
            <h6>оплата</h6>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper justo, nec, pellentesque.
              </p>
              <img src="Fvisa.svg" />
              <img src="Fmastercard.svg" />
            </div>
          </div>
          <div>
            <h6>контакты</h6>
            <div>
              <div>
                <img src="Fphone.svg" />
                <span>8 (812) 234-56-55</span>
              </div>
              <div>
                <img src="Fphone.svg" />
                <span>8 (812) 234-56-55</span>
              </div>
              <div>
                <img src="Flater.svg" />
                <span>ojjo@ojjo.ru</span>
              </div>
            </div>
          </div>
          <div>
            <h6>социальные сети</h6>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper justo, nec, pellentesque.
              </p>
              <footer>
                <a href="#">
                  <img src="blackYoutube.svg" />
                </a>
                <a href="#">
                  <img src="blackVk.svg" />
                </a>
                <a href="#">
                  <img src="blackFecebook.svg" />
                </a>
                <a href="#">
                  <img src="blackTwitter.svg" />
                </a>
                <a href="#">
                  <img src="blackE.svg" />
                </a>
              </footer>
            </div>
          </div>
        </main>
        <footer>
          <p>(c) 2020 OJJO jewelry</p>
          <p>Договор публичной офферты</p>
          <p>Контрагентам</p>
          <p>Сделано Figma.info</p>
        </footer>
      </div>
    </footer>
  );
}
