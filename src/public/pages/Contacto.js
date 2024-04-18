import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/style_Contact.css";
import "../../styles/style_QS.css";
export default function Contacto() {
  return (
    <div className="">
      <div className="wide-image-container UASD ">
        <img
          src="../images/hcwh.png"
          alt="Imagen"
          className="wide-image img-fluid mb-3"
        />
        <h2 className="wide-image-text SSAWR">Send us a message!</h2>
      </div>
      <div className="container">
        <Row className="mt-5 mb-5 ">
          <Col md={8}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formNombre">
                    <Form.Label className="d-flex mt-3 fw-bold">
                      Name
                    </Form.Label>
                    <Form.Control className="bfc" type="text"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formNumero">
                    <Form.Label className="d-flex mt-3 fw-bold">
                      Phone
                    </Form.Label>
                    <Form.Control className="bfc" type="tel"/>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group controlId="formCorreo">
                    <Form.Label className="d-flex mt-3 fw-bold">
                      Email
                    </Form.Label>
                    <Form.Control className="bfc" type="email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formTipoPregunta">
                    <Form.Label className="d-flex mt-3 fw-bold">
                      Type question
                    </Form.Label>
                    <Form.Control as="select" className="bfc">
                      <option>General inquiry</option>
                      <option>Technical support</option>
                      <option>Product information</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formComentario">
                    <Form.Label className="d-flex mt-3 fw-bold">
                      Commentary
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write your comment"
                      className="pbs5 bfc"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit" className="mt-5">
                Send
              </Button>
            </Form>
          </Col>

          <Col md={4} className="mb-5 d-block">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.554233999486!2d-98.41647458471035!3d21.138104985948507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1be2e37fffe41%3A0x8a25047c74dc16c!2sHuejutla%20de%20Reyes%2C%20Hgo.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1651530375637!5m2!1ses-419!2sus"
                width="450"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <strong className="d-flex sli">Work Time:</strong>
            <p className="d-flex"> 9:00-18:00</p>
            <strong className="d-flex sli">WhatsApp:</strong>
            <p className="d-flex"> +52 7712348363</p>
            <strong className="d-flex sli">E-mail:</strong>
            <p className="d-flex"> Plantech@gmail.com</p>
            <strong className="d-flex sli">Work Place:</strong>
            <p className="d-flex">
              Huejutla de Reyes Hidalgo CP: 43000, Capitan Antonio Reyes.
            </p>
          </Col>

          <Col
            md={4}
            className="mb-5 d-flex justify-content-end flex-column align-items-start"
          ></Col>
        </Row>
      </div>
    </div>
  );
}
