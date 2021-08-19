import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

class Header extends React.Component{
    render(){
        return (
            <div className="header shadow-sm">
                <a href="#" className="logo">Logotype</a>
                <div className="header-right">
                    <Link to="/posts">Все</Link>
                    <Link to="#">Новости</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
            </div>
        )
    }
}

export default Header;