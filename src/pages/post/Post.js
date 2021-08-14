import React from 'react';
import styles from './Post.module.css';

class Post extends React.Component{

    render(){
        return (
        <div className="postcard-container">
            <div className="postcard-blocks">
                <div className="postcard_authors">
                    <span className={styles.create_name}>Тестов Тест</span>
                    <span className="create_date">31.07.2021 19:59</span>
                </div>
                <div className="postcard_img">
                    <img className="postcard__img" src="https://picsum.photos/1200/200?grayscale" alt=""/>
                </div>
                <div className="postcard_title">
                    <h1>JPEG, который можно посмотреть в блокноте</h1>
                </div>
                <div className="postcard_desc">
                    <p>
                        Если открыть произвольный JPEG-файл в блокноте, то можно увидеть лишь хаотичный набор
                        символов. Отсюда вопрос: возможно ли закодировать изображение так, чтобы его было можно
                        просмотреть не только обычным способом, но и в обычном блокноте, в виде ASCII-графики. Ответ
                        положительный, если использовать максимальное сжатие:

                        Grayscale (только оттенки серого).

                        Обнулить все AC-коэффициенты, то есть весь блок 8x8 пикселей сделать одноцветным.

                        Задать максимальный шаг квантования DC-коэффициента - 255. Это ограничивает цвет всего 9
                        оттенками серого: 0, 32, 64, 96, 128, 160, 192, 224, 255.
                    </p>
                </div>
            </div>

            <div className="comments-blocks">
                <h2 className="comments-blocks__title">Комментарии <span
                    className="comments-blocks__counter">5</span></h2>
                <div className="comments-blocks__form">
                    <div className="">
                        <label htmlFor="name">Имя</label><br/>
                        <input className="form-control" id="name" type="text"/>
                    </div>
                    <div className="">
                        <label htmlFor="text">Сообщение</label><br/>
                        <textarea className="form-control" id="text" cols="50" rows="6"></textarea>
                    </div>
                    <div className="text-center mt-2">
                        <button className="btn btn-primary">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}



export default Post;
