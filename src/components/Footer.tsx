import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__row">
          <div className="footer__items">
            <div className="footer__title">
              <a href="" className="footer__logos">
                {/* <img src="" alt="" className="footer__logo"> */}
              </a>
            </div>
            <div className="footer__item footer__tel">
              <a href="tel:+74994504797" className="footer__link">
                8 (499) 450-47-97
              </a>
            </div>
            <div className="footer__item footer__mail">
              <a href="mailto:info@conquest.watch.ru" className="footer__link">
                info@conquest.watch.ru
              </a>
            </div>
          </div>
          <div className="footer__items">
            <div className="footer__title">о компании</div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Наши магазины
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Вакансии
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Сертификаты
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Отзывы
              </a>
            </div>
          </div>
          <div className="footer__items">
            <div className="footer__title">покупателям</div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Каталог товаров
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Как заказать?
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                FAQ
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Корпоративным клиентам
              </a>
            </div>
          </div>
          <div className="footer__items">
            <div className="footer__title">оплата и доставка</div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Способы оплаты
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Время доставки
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Гарантии и ремонт
              </a>
            </div>
            <div className="footer__item">
              <a href="" className="footer__link">
                Возврат и компенсация
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
