import React from 'react';
import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faWhatsapp, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons';

class Contacts extends React.Component{
    render(){
        return (
            <>
                <div className="container">
                    <div className="map">
                        КАРТА
                    </div>
                    <div className="contact">
                        <div className="contact-title">
                            Наши контакты
                        </div>
                        <div className="telephone">
                            <ul>
                                <li><FontAwesomeIcon icon={faPhoneAlt}/> (999) 99 99 99</li>
                                <li><FontAwesomeIcon icon={faPhoneAlt}/> (888) 88 88 88</li>
                                {/*<li><FontAwesomeIcon icon={faWhatsapp}/> (777) 77 77 77</li>*/}
                                <li><FontAwesomeIcon icon={faEnvelope}/> mail@gmail.com</li>
                            </ul>
                        </div>
                        <button>Оставить жалобу</button>
                        <div className="time-work">
                            <div className="work-title">Режим работы</div>
                            <div className="clock-icon">
                                <FontAwesomeIcon icon={faClock}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default Contacts;