import React from 'react'
import './Contact.css'

export default function Contact(){
    return (
        <section id="contact-container">
            <div className='limit-section'>
                <h2 className='subtitles'>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className='contact-info'>
                    <div className='contact-content'>
                        <h3>Contato</h3>
                        <div className='contact-detailed-content'>
                            <img src="assets/local.png" alt="Localização"/>
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div className='contact-detailed-content'>
                            <img src="assets/telefone.png" alt="Telefone"/>
                            <span>(21) 9999-9999</span>
                        </div>
                        <div className='contact-detailed-content'>
                            <img src="assets/email.png" alt="Email"/>
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className='contact-content'>
                        <h3>Nossas Redes Sociais</h3>
                        <div className='contact-detailed-content'>
                            <img src="assets/fb.png" alt="Facebook"/>
                            <span>/OticaVida</span>
                        </div>
                        <div className='contact-detailed-content'>
                            <img src="assets/ig.png" alt="Instagram"/>
                            <span>@oticavidarj</span>
                        </div>
                        <div className='contact-detailed-content'>
                            <img src="assets/tt.png" alt="Twitter"/>
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}