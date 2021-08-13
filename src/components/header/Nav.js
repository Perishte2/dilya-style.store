import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

   state={
       toggle:false
   }
    menuToggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle}=this.state;
        return (
            <div>
                <ul className={toggle ? "toggle" : ""}>
                <li class="closing-button"><Link to="/">Главная</Link></li>
                <li class="closing-button"><Link to="/blog">Отзывы</Link></li>
                <li class="closing-button"><Link to="cart">Каталог</Link></li>
                <li class="closing-button"><Link to="/contact">Контакты</Link></li>
                <li class="closing-button"><Link to="/login">Вход Регистрация </Link></li>
                <li className="close" onClick={this.menuToggle}>X</li>
            </ul>
            <div className="menu" onClick={this.menuToggle}>Menu</div>
            </div>
        );
    }
}

export default Nav;