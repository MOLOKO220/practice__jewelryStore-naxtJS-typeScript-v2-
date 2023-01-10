import React from "react";
import style from "./Mailing.module.scss";

export default function Mailing() {
  return (
    <section className={style.Mailing}>
      <div className="container">
        <p>Полезные советы и персональный предложения</p>
        <h6>Эксклюзивная рассылка</h6>
        <main>
          <ul>
            <li>
              <img src="ul-li-arry.svg" alt="arry" />
              <p>Личный менеджер</p>
            </li>
            <li>
              <img src="ul-li-arry.svg" alt="arry" />
              <p>Доставка и оформление</p>
            </li>
            <li>
              <img src="ul-li-arry.svg" alt="arry" />
              <p>Индивидуальный дизайн</p>
            </li>
          </ul>
          <div>
            <label>
              <input type="text" placeholder="Ваш e-mail" />
              <button>отправить</button>
            </label>
          </div>
        </main>
      </div>
    </section>
  );
}
