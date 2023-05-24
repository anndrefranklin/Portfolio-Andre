import React from 'react'

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../styles/components/informationContainer.sass"

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>+55 85 98758-3698</p>
            </div>
        </div>

        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>anndrefranklin@gmail.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização</h3>
                <p>Fortaleza - Ceará</p>
            </div>            
        </div>
    </section>
  )
}

export default InformationContainer