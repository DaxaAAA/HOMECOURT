import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

function App() {

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.sendForm('service_t9ce4ka', 'template_9trknfj', e.target, '0R9RXthWAaupl99q5')
        .then((result) => {
            alert('Письмо успешно отправлено!');
            window.location.reload();
        }, (error) => {
            console.log('Ошибка при отправке письма:', error.text);
            alert('Произошла ошибка. Пожалуйста, попробуйте снова.');
        });
  }

  // Функция для обработки отправки формы
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Имя:', formData.get('firstName'));
    console.log('Фамилия:', formData.get('lastName'));
    console.log('Почта:', formData.get('email'));
    console.log('Сообщение:', formData.get('message'));
    alert('Форма отправлена! Проверьте консоль для введенных данных.');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true,     // Запуск анимации только один раз при прокрутке
    });
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="py-3 bg-light" data-aos="fade-down">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="logo">HOMECOURT</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Магазин</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Откройте для себя</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Войти</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Корзина</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Banner */}
      <section className="banner text-center text-light d-flex align-items-center justify-content-center animate__animated animate__zoomIn" style={{ backgroundImage: "url('img/stockist.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '600px' }}>
        <div className="container">
          <h2 className="banner-title">Красота домашнего ухода</h2>
          <button className="btn btn-dark mt-3">Купить коллекцию</button>
        </div>
      </section>

      {/* Our Sets Section */}
      <section className="our-sets py-5">
        <div className="container text-center">
          <h2 className="section-title">Наши наборы</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 my-3">
              <div className="set-card animate__animated animate__fadeInUp">
                <img src="img/soap1.jpg" alt="Steeped Rose" className="img-fluid" />
                <h3>Роза</h3>
                <p>6,500 ₽</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <div className="set-card animate__animated animate__fadeInUp">
                <img src="img/soap2.jpg" alt="Neroli Leaf" className="img-fluid" />
                <h3>Лист Нероли</h3>
                <p>6,500 ₽</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <div className="set-card animate__animated animate__fadeInUp">
                <img src="img/soap3.jpg" alt="Cypress Mint" className="img-fluid" />
                <h3>Кипарис и мята</h3>
                <p>6,500 ₽</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <div className="set-card animate__animated animate__fadeInUp">
                <img src="img/soap4.jpg" alt="Cece" className="img-fluid" />
                <h3>Цеце</h3>
                <p>6,500 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantage Section */}
      <section className="our-advantage py-5 bg-light animate__animated animate__fadeIn">
        <div className="container text-center">
          <h2 className="section-title">Наши преимущества</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Тонкие ароматы</h3>
              <p>Уникальные ароматы, созданные экспертами-парфюмерами с использованием ценных природных материалов и веганских ингредиентов.</p>
            </div>
            <div className="col-md-4">
              <h3>Чистые формулы</h3>
              <p>Нетоксичные формулы с ингредиентами класса по уходу за кожей. Разработаны косметическими химиками. Всегда веганские и не тестируются на животных.</p>
            </div>
            <div className="col-md-4">
              <h3>Устойчивый дизайн</h3>
              <p>Все, от наших бутылок до наших коробок, сделано из 100% переработанных материалов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-5">
        <div className="container d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <img src="img/brand.jpg" alt="Our Story" className="img-fluid" />
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRight">
              <h2>Переосмысление домашнего ухода</h2>
              <p>Практика ухода за своим пространством с удовольствием. Уборка - это поддержание порядка. Домашний уход - это трансформация.</p>
              <button className="btn btn-dark mt-3">Наша история</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="our-products py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title">Наши продукты</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 my-3">
              <div className="product-card animate__animated animate__fadeInUp">
                <img src="img/item4.jpg" alt="Surface Cleaner" className="img-fluid" />
                <h3>Средство для очистки поверхностей</h3>
                <p>2,000 ₽</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <div className="product-card animate__animated animate__fadeInUp">
                <img src="img/item2.jpg" alt="Dish Soap" className="img-fluid" />
                <h3>Средство для мытья посуды</h3>
                <p>1,000 ₽</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <div className="product-card animate__animated animate__fadeInUp">
                <img src="img/item3.jpg" alt="Hand Wash" className="img-fluid" />
                <h3>Средство для мытья рук</h3>
                <p>3,000 ₽</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <div className="product-card animate__animated animate__fadeInUp">
                <img src="img/item1.jpg" alt="Kitchen Trio" className="img-fluid" />
                <h3>Кухонный трио</h3>
                <p>6,500 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Section */}
      <section className="concierge py-5 text-center">
        <div className="container">
          <h2 className="section-title">Поддержка</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            {/* Форма обратной связи */}
            <div className="mb-3">
              <input type="text" name="firstName" className="form-control mb-2" placeholder="Ваше Имя" required />
            </div>
            <div className="mb-3">
              <input type="text" name="lastName" className="form-control mb-2" placeholder="Ваша Фамилия" required />
            </div>
            <div className="mb-3">
              <input type="email" name="email" className="form-control mb-2" placeholder="Ваша Почта" required />
            </div>
            <div className="mb-3">
              <textarea name="message" className="form-control mb-2" rows="4" placeholder="Ваше Сообщение" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark mt-3">Отправить сообщение</button>
          </form>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="footer py-5 bg-dark text-light">
        <div className="container text-center">
          <form className="mb-3">
            <button className="btn btn-outline-light">Подписаться на новости и эксклюзивы</button>
          </form>
          <div className="footer-links d-flex justify-content-center mb-3">
            <a href="#" className="mx-3">О нас</a>
            <a href="#" className="mx-3">Помощь</a>
            <a href="#" className="mx-3">Следите за нами</a>
          </div>
          <p className="mb-0">&copy; 2024 Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
