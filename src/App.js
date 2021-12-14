import React from 'react';

import './App.css';

import Check from './Components/Check/Check.jsx';

const App = () => {
    return(
        <div className="main">
            <div className="main__inner">
                {/*Пользователь*/}

                <div className="checks__inner">
                    <p className="checks__title">
                        Счета
                    </p>

                    <div className="checks__content--wrapper">
                        <div className="checks__content--blur"></div>

                        <div className="checks__content">
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                            <Check name="Основной счёт" balance="40 425,58 ₽" />
                        </div>
                    </div>
                </div>

                {/*Доходы и расходы*/}

                {/*Цель*/}

                {/*Создать счёт*/}
            </div>
        </div>
    );
}

export default App;