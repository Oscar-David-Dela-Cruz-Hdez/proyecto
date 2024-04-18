import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/style_QS.css";

export default function QuienesSomos() {
  return (
    <div className="">
      <div className="wide-image-container IAS">
        <img
          src="../images/about.png"
          alt="Imagen"
          className="wide-image img-fluid mb-3"
        />
        <h2 className="wide-image-text">About us</h2>
      </div>
      <div className="container">
        <Row className="mt-4">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>A reliable company</h2>
              <p>
                We are a leading company in comprehensive solutions for home
                security. With more than a decade of experience, we We
                specialize in providing advanced alarm systems, video
                surveillance and access control to protect what matters most
                matters: your home and your family.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <img
              src="../images/a1.png"
              alt="Imagen"
              className="img-fluid mb-3 IABS"
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <img
              src="../images/a2.png"
              alt="Imagen"
              className="img-fluid mb-3 IABS"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Our work team</h2>
              <p>
                Our team of security experts works tirelessly to offer you the
                peace of mind and protection you deserve. From alarm systems
                connected to 24/7 monitoring centers to high definition cameras
                and smart locks, in Home Security S.A. we are committed to
                providing you with the technology most advanced and reliable to
                keep your home safe at all moment.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Plantech</h2>
              <p>
                “At Plantech we believe that the power of technology can provide
                comfort and security to people's lives. Whether it is a home, a
                company or a public institution, we offer Reliable and
                high-quality smart lock products quality to meet a variety of
                needs security".
              </p>
            </div>
          </Col>

          <Col md={6}>
            <img
              src="../images/a3.png"
              alt="Imagen"
              className="img-fluid mb-3 IABS"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
