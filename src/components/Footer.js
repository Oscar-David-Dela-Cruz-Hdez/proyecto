import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom';
import '../Estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Elimina faArrowRight de aquí
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Mantén faArrowRight aquí

export default function Footer() {
    const whatsappLink = "https://www.whatsapp.com/";
    const facebookLink = "https://www.facebook.com/";
    const instagramLink = "https://www.instagram.com/";
    const twitterLink = "https://twitter.com/";
    return (
        <div className='footer'>
            <Container>
                <Row className="justify-content-around">
                    <Col sm={12} md={3}>
                        <h4 style={{ color: '#ffffff' }}>Support</h4>
                        <ul className='linkF'>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.faq}>Frequently asked questions</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.quienesSomos}>About us</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.contacto}>Contact</Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 style={{ color: '#ffffff' }}>Subscribe to plantech</h4>
                        <ul className='linkF'>
                            <li>
                                {/* Agrega enlaces a los iconos */}
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="socialIcon" />
                                </a>
                                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
                                </a>
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
                                </a>
                                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 style={{ color: '#ffffff' }}>Plantech</h4>
                        <ul className='linkF'>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.p1}>Privacy policy</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.p1}>Shipping policy</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.p1}>Refund policy</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.ts}>Terms of service</Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className='text-start mx-4' style={{ color: '#aaaeb6' }}>Get more information<br /> Enter your email to subscribe to our newsletter:</p>
                        <div style={{ position: 'relative' }}>
                            <input type="text" className="inputCorreo" placeholder="Email" />
                            <button className="botonFlecha">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
