import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return (
            <div className="header shadow-sm">
                <a href="#" className="logo">Logotype</a>
                <div className="header-right">
                    <a className="active" href="http://localhost:3000/posts">Все</a>
                    <a href="#">Новости</a>
                    <a href="http://localhost:3000/onePost">Статьи</a>
                    <a href="http://localhost:3000/contacts">Контакты</a>
                </div>
            </div>
        )
    }
}

export default Header;