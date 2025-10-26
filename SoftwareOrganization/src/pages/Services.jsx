import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'
import FooterContentComponent from '../components/FooterContentComponent'
import LayoutWithSidebar from '../components/LayoutWithSidebar'
import ServiceImg from './../assets/images/service1.jpg'
const Services = () => {
  return (
    <LayoutWithSidebar>
      <div>
      <TitleComponent title="Services Page"></TitleComponent>
      {/* --------- First Row of Servcie Details -------- */}
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>Software Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>Software Testing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>Software Maintenance</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* --------- Second Row of Servcie Details -------- */}
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-4">
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>Springboot Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>Spring Security</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>MicroServices</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* --------- Third Row of Servcie Details -------- */}
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-4 mb-4">
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>CSS Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>Bootstrap Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ServiceImg} />
              <Card.Body>
                <Card.Title>React Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <FooterContentComponent></FooterContentComponent>
      </div>
    </LayoutWithSidebar>
  )
}

export default Services