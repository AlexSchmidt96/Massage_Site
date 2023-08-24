import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import personalFoto from '../assets/personalFoto1.png'
import personalFoto2 from '../assets/personalFoto2.png'
import table1 from '../assets/table1.png'
import table2 from '../assets/table2.png'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={personalFoto}
                        alt="Personal Foto"
                        height='1000px'
                    />
                    <Carousel.Caption>
                        <p> Меня зовут Алексей, я имею среднее специальное образование по профилю: "Сестринское дело".
                            Обучался в ГБПОУ МО «Московский областной медицинский колледж №4» Дмитровский филиал.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height='1000px'
                        className="d-block w-100"
                        src={personalFoto2}
                        alt="Personal Foto2"
                    />
                    <Carousel.Caption>
                        <p>Во время обучения в мед.колледже прошёл курсы массажа в "Многопрофильном учебно-консультативном центре. Центр дополнительного образования".
                            Окончил профессиональную переподготовку в АНО ДПО "Центр повышения квалификации и профессиональной переподготовки" по профилю: "медицинский массаж", и прошёл обязательную медицинскую аккредитацию по "Медицинскому массажу".</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height='1000px'
                        className="d-block w-100"
                        src={table1}
                        alt="table 1"
                    />
                    <Carousel.Caption>
                        <p>Так же работаю массажистом в клинике "Семья" на ул.
                            Текстильная, если у Вас имеется ДМС, то могу подсказать как записаться туда на сеансы массажа.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height='1000px'
                        className="d-block w-100"
                        src={table2}
                        alt="table 2"
                    />
                    <Carousel.Caption>
                        <p> Приглашаю на сеансы массажа взрослых и детей от 3-х лет. У меня цены крайне демократичны, но тем не менее, обладаю хорошими познаниями в области массажного дела, с хорошо развитым тактильным ощущением тела пациента.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    }
}