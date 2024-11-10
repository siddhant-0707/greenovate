import React from "react";
import css from "./footer.module.css";
import { Container } from "react-bootstrap";
import InstagramIcon from "./instIcon"
import LinkedInIcon from "./linkIcon";
import TwitterIcon from "./twitter";
import FacebookIcon from "./faceIcon.js";
const Footer = () => {
  return (
    <Container className={`${css.footer} ${css.main}`} style={{padding: "5rem 25rem 0"}} fluid >
      
        <footer className="text-center text-lg-start text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span  style={{color:"#c7dddf"}}>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="https://www.facebook.com" className="me-4 text-reset">
                <FacebookIcon height={16} width={16} className={"bi bi-facebook"}/>
              </a>
              <a href="https://www.twitter.com" className="me-4 text-reset">
                <TwitterIcon height={16} width={16} className={"bi bi-twitter"}/>
              </a>
              <a href="https://www.linkedin.com" className="me-4 text-reset">
                <LinkedInIcon height={16} width={16} className={"bi bi-linkedin"}/>
              </a>
              <a href="https://www.instagram.com" className="me-4 text-reset">
                <InstagramIcon height={16} width={16} className={"bi bi-instagram"}/>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Greenovate
                  </h6>
                  <p  style={{color:"#c7dddf"}}>Your path to net-zero</p>
                  <img className={css.logo} src="./logo.png" alt="" />
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                  <p>
                  <a href="#!" className="text-reset" style={{color:"inherit",textDecoration:"inherit"}}>
                      <p style={{color:"#c7dddf"}}>
                        Pricing
                        </p>
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p style={{color:"#c7dddf"}}>
                     New York, NY 10012, US
                  </p>
                  <p style={{color:"#c7dddf"}}>
                    info@example.com
                  </p>
                  <p style={{color:"#c7dddf"}}>
                     + 01 234 567 88
                  </p>
                  <p style={{color:"#c7dddf"}}>
                    + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4" style={{color:"#c7dddf"}}>
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://www.greenovate.com">
              Greenovate
            </a>
          </div>
        </footer>
      
    </Container>
  );
};

export default Footer;
