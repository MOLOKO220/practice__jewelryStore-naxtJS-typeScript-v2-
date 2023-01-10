import React from "react";
import Mailing from "../component/Mailing/Mailing";

export default function () {
  return (
    <div className="Home">
      <section className="Home__first-section">
        <h3>Долго, дорого, богато!</h3>
        <button>каталог изделий </button>
        <footer>
          <div className="container">
            <div>
              <img src="HFS_logo.svg" />
            </div>
            <div>
              <img src="HFS_logo.svg" />
            </div>
            <div>
              <img src="HFS_logo.svg" />
            </div>
            <div>
              <img src="HFS_logo.svg" />
            </div>
            <div>
              <img src="HFS_logo.svg" />
            </div>
            <div>
              <img src="HFS_logo.svg" />
            </div>
          </div>
        </footer>
      </section>
      <section className="Home__second-section">
        <div className="container">
          <header>
            <p>К мероприятиям</p>
            <h4>Настоящая красота здесь!</h4>
          </header>
          <main>
            <header>
              <div className="active">Свадьба</div>
              <div>МУЖУ</div>
              <div>жене</div>
              <div>партнеру</div>
              <div>коллекции</div>
              <div>редкость</div>
            </header>
            <main>
              <div>
                <h6>Кольца</h6>
              </div>
              <div>
                <h6>серьги</h6>
              </div>
              <div>
                <h6>подвески</h6>
              </div>
              <div>
                <h6>запонки</h6>
              </div>
              <div>
                <h6>браслеты</h6>
              </div>
              <div>
                <h6>часы</h6>
              </div>
            </main>
          </main>
        </div>
      </section>
      <section className="Home__third-section">
        <div className="container">
          <h6>Не знаете, что выбрать?</h6>
          <h5>Посетите наши салоны в Москве</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
            tortor vitae pellentesque egestas quam pulvinar. Pellentesque
            porttitor velit sit pellentesque. Suspendisse donec pretium id
            dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut
            ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus
            nisi libero viverra ipsum.
          </p>
          <button>наши салоны</button>
        </div>
      </section>
      <section className="Home__four-section">
        <div className="container">
          <p>Полезные статьи</p>
          <h6>Лучшие советы по подбору дорогих подарков</h6>
          <main>
            <div>
              <p>Как выбрать часы для своей будущей жены</p>
            </div>
            <div>
              <p>Запонки для мужа: 7 ключевых правил покупки аксессуара</p>
            </div>
            <div>
              <p>Как выбрать обручальные кольца молодоженам</p>
            </div>
          </main>
          <button>читать наш блог</button>
        </div>
      </section>
      <Mailing />
    </div>
  );
}
