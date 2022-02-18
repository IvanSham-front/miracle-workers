export default function Nav() {
    return (
        <nav className="nav nav__inner">
            <button className="burger-btn btn nav__button">
                <span className="burger-btn__item"></span>
                <span className="burger-btn__item"></span>
                <span className="burger-btn__item"></span>
            </button>

            <ul className="nav__list">
                <li className="nav__page nav-page">
                    <span className="nav-page__number">01</span>
                    <span className="nav-page__text">Подсказки</span>
                </li>

                <li className="nav__page nav-page">
                    <span className="nav-page__number">02</span>
                    <span className="nav-page__text">Подсказки</span>
                </li>

                <li className="nav__page nav__page_active nav-page">
                    <span className="nav-page__number">03</span>
                    <span className="nav-page__text">Подсказки</span>
                </li>

                <li className="nav__page nav-page">
                    <span className="nav-page__number">04</span>
                    <span className="nav-page__text">Подсказки</span>
                </li>

            </ul>
        </nav>
    )
}