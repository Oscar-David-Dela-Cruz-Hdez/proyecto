import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../../styles/style_faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicy() {
  const [mostrarTexto1, setMostrarTexto1] = useState(false);
  const [mostrarTexto2, setMostrarTexto2] = useState(false);
  const [mostrarTexto3, setMostrarTexto3] = useState(false);
  const [mostrarTexto4, setMostrarTexto4] = useState(false);
  const [mostrarTexto5, setMostrarTexto5] = useState(false);

  return (
    <div className="twmx">
      <Row className="justify-content-center my-5">
        <Col xs={12} className="text-center m-0 p-0">
          <h1>How can we help you?</h1>
          <p className="mt-3">
            On this page you will find important information about how We handle
            your data and your privacy.
          </p>

          <Row className="d-flex container justify-content-center mt-3 mb-5 m-auto">
            <Col xs={12} className="mb-4 container">
              <div className="container">
                {/* Primer conjunto de 3 recuadros */}
                <div className="row container d-flex justify-content-center">
                  <div className="col-md-2 col-sm-6 mb-4 d-flex justify-content-center">
                    <div className="efe f1">
                      <span className="asd">Help with payments</span>
                      <img
                        src="../images/f1.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 mb-4 d-flex justify-content-center">
                    <div className="efe f2">
                      <span className="asd">Help with account</span>
                      <img
                        src="../images/f2.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 mb-4 d-flex justify-content-center">
                    <div className="efe f3">
                      <span className="asd">Help with a purchase</span>
                      <img
                        src="../images/f6.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                </div>
                {/* Segundo conjunto de 3 recuadros */}
                <div className="row container d-flex justify-content-center">
                  <div className="col-md-2 col-sm-6 col-xs-6 mb-4 d-flex justify-content-center">
                    <div className="efe f4">
                      <span className="asd">Help with the application</span>
                      <img
                        src="../images/f3.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 col-xs-6 mb-4 d-flex justify-content-center">
                    <div className="efe f5">
                      <span className="asd">Help with a device</span>
                      <img
                        src="../images/f4.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6  mb-4 d-flex justify-content-center">
                    <div className="efe f6">
                      <span className="asd">Security and privacy</span>
                      <img
                        src="../images/f5.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <h4>Quick help</h4>

          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto1(!mostrarTexto1)}
              variant="primary"
            >
              <span>
                {mostrarTexto1 ? (
                  <>
                    I can not log in
                    sesiónㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </>
                ) : (
                  <>
                    I can not log in
                    sesiónㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto1 && (
              <div
                className="container fsp"
                style={{ animation: "slideIn 0.5s ease" }}
              >
                <h2 className="mb-4">Do you have problems accessing?</h2>
                <p>If you don't remember your password, you can reset it.</p>
                <p>
                  If you don't remember your email or username, go to the reset
                  your account page and enter any email addresses you have. When
                  you enter an address that is registered with Plantech, a
                  message will appear indicating that the password reset email
                  has been sent.
                </p>
                <p>
                  Important: there are several ways to register, for example,
                  with email, phone number, Facebook, Apple or Google. Try
                  logging in with all of these options to see if you can find
                  the account.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto2(!mostrarTexto2)}
              variant="primary"
            >
              <span>
                {mostrarTexto2 ? (
                  <>
                    Help with payment errors
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </>
                ) : (
                  <>
                    Help with payment errors
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto2 && (
              <div className="container fsp">
                <h2>Help with payment errors</h2>
                <p>
                  Make sure your payment method has sufficient funds and is as
                  follows:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Registered in the same country as your Plantech account.
                  </li>
                  <li>Current.</li>
                  <li>
                    Authorized to make purchases abroad, online and recurring
                    transactions. You can configure these options from your
                    bank's mobile application.
                  </li>
                </ul>
                <p>
                  Also make sure your bank or payment provider has your correct
                  information. They may need to verify your identity for
                  security reasons through a password, PIN code, fingerprint or
                  a code sent to your device.
                </p>
                <h3>Did none of these options solve the problem?</h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Try re-entering your payment details from a window private
                    browsing or incognito mode.
                  </li>
                  <li>Try a different payment method.</li>
                  <li>
                    It may just be a connection issue. temporary. Wait a couple
                    of hours and try again.
                  </li>
                  <li>Contact your payment provider.</li>
                </ul>
                <h3>Was there an error with the regular payment?</h3>
                <p>
                  If there is an error with your monthly subscription payment,
                  do not you will lose access to Premium immediately. We will
                  try to return to process the payment in the next few days.
                </p>
                <h3>Payments through a partner company</h3>

                <p>
                  If you subscribed to the plan through a partner company (e.g.,
                  your Internet or mobile phone provider), that company will
                  manage your payments. You will need to contact them for any
                  payment-related issues.
                </p>
                <p>
                  To find out who your provider is or to get in touch with them
                  directly, do the following:
                </p>
                <ol>
                  <li>Go to your account page.</li>
                  <li>In Account, choose the Manage your plan option.</li>
                  <li>Check the contact link under Payment.</li>
                </ol>
                <p>
                  You can verify or update your payment information on your
                  account page, under Your plan.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto3(!mostrarTexto3)}
              variant="primary"
            >
              <span>
                {mostrarTexto3 ? (
                  <>
                    Problems with the application?
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </>
                ) : (
                  <>
                    Problems with the application?
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto3 && (
              <div
                className="container fsp"
                style={{ animation: "slideIn 0.5s ease" }}
              >
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Plantech, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto4(!mostrarTexto4)}
              variant="primary"
            >
              <span>
                {mostrarTexto4 ? (
                  <>
                    My device stopped
                    functionㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </>
                ) : (
                  <>
                    My device stopped
                    functionㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto4 && (
              <div
                className="container fsp"
                style={{ animation: "slideIn 0.5s ease" }}
              >
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Plantech, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4 mb-5">
            <Button
              onClick={() => setMostrarTexto5(!mostrarTexto5)}
              variant="primary"
            >
              <span>
                {mostrarTexto5 ? (
                  <>
                    My account is
                    engagedㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </>
                ) : (
                  <>
                    My account is
                    engagedㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto5 && (
              <div
                className="container fsp"
                style={{ animation: "slideIn 0.5s ease" }}
              >
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Plantech, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
