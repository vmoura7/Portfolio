import React, {useRef} from 'react'
import './contacts.css'


import {GrInstagram} from 'react-icons/gr'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {FaTelegram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


import emailjs from 'emailjs-com'

const Contacts = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_06mlv2u', 'template_tq18m2l', form.current, 'AP4rTmAN7B8TcUap5')
        e.target.reset()
    };



    return (
        <section id='contacts' className='contacts section container'>
        
        <div className="sectionTitle">
            <span className="titleNumber">04.</span>
            <h5 className="titleText">Contatos
            <div className="underline"><span></span></div>
            </h5>    
        </div>
        
        <div className="contactsContainer grid">
            <div className="socialContacts grid">
                <h3>Entre em contato</h3>
               
                <div className="cards grid">
                    <div className="card">
                        <div>
                            <GrInstagram className='icon'/>
                        </div> 
                        <h4>Instagram</h4>
                        <span className="userName">
                            @vmoura7
                        </span>
                        <div>
                            <a href="https://www.instagram.com/v.moura7/" className='flex' target='_blank'>
                                Enviar mensagem
                                <TbArrowBigRightLines className='icon'/>
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <BsWhatsapp className='icon'/>
                        </div> 
                        <h4>Whatsapp</h4>
                        <span className="userName">
                            +5579988583973
                        </span>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=5579988583973&text=Ol%C3%A1%20Victor%2C%20tudo%20bem!" className='flex' target='_blank'>
                                Enviar mensagem
                                <TbArrowBigRightLines className='icon'/>
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <FaTelegram className='icon'/>
                        </div> 
                        <h4>Telegram</h4>
                        <span className="userName">
                            @v_moura7
                        </span>
                        <div>
                            <a href="https://t.me/v_moura7" className='flex' target='_blank'>
                                Enviar mensagem
                                <TbArrowBigRightLines className='icon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="form grid">
                <h3>Envie um email</h3>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Digite seu nome' name='name' />
                    <input type="text" placeholder='Digite seu e-mail' name='email' />
                    <textarea name="message" placeholder='Digite sua mensagem'></textarea>
                    <button className='formBtn' type='submit' name='submit'>
                        Enviar
                    </button>
                </form>
            </div>

        </div>
        </section>
    )
}

export default Contacts

