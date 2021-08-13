import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h2>Контактная информация</h2>
                <br/>
                <b>График работы </b><br/>

                Пн-Пт с 9:00 до 19:00 <br/>
                Суббота: выходной  <br/>
                Воскресенье: выходной

               <br/> <br/>
                <b>Контактные номера:</b> <br/>
                +(996)220345678, <br/>
                +(996)550987654, <br/>
                +(996)708080808 <br/><br/>
            
               <b>Отдел корпоративных продаж:</b> <br/>

                Телефон: +996 (702) 93-88-33<br/>

                E-mail: corp@svetofor.info
            </div>
        );
    }
}

export default Contact;