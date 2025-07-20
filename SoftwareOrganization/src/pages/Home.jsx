import React from 'react'
import TitleComponent from '../components/TitleComponent'
import ContentComponent from '../components/ContentComponent'
import CarouselComponent from '../components/CarouselComponent'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Team1 from './../assets/images/user1.jpg'
import Growth from './../assets/images/growth.jpg'
import FooterContentComponent from '../components/FooterContentComponent';
const Home = () => {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      {/* ------ tagLine start here  ---- */}
      <div className='container-fluid'>
        <div className="row justify-content-center pt-4 pb-4">
          <div className="col-md-9">
            <h2 className='display-6 text-center'>Software development is the act of examining the <br />
              artifacts and the behavior of the software.</h2>
          </div>
        </div>
      </div>
      {/* ------ tagLine end here  ---- */}

      {/* -------- organization details start --------- */}
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-4 mb-4">
          <div className="col-md-3 text-center shadow-sm bg-light border rounded-4">
            <h1><i class="bi bi-file-code-fill text-primary"></i></h1>
            <h5>Our Vision</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut quam officia, libero magni consectetur architecto quasi.</p>
          </div>
          <div className="col-md-3 text-center shadow-sm bg-light border rounded-4">
            <h1><i class="bi bi-bookmarks-fill text-danger"></i></h1>
            <h5>Our Mission</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut quam officia, libero magni consectetur architecto quasi.</p>
          </div>
          <div className="col-md-3 text-center shadow-sm bg-light border rounded-4">
            <h1><i className="bi bi-calendar-range-fill text-success"></i></h1>
            <h5>Our Aims</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut quam officia, libero magni consectetur architecto quasi.</p>
          </div>
        </div>
      </div>
      {/* -------- organization details end--------- */}

      {/* ---------   Team Members ----------------- */}
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-4 mb-4">
          <h4 className='text-center pt-5 pb-2'>Our Team Members</h4>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Team1} />
              <Card.Body>
                <Card.Title>Santosh</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Team1} />
              <Card.Body>
                <Card.Title>Rushikesh</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Team1} />
              <Card.Body>
                <Card.Title>Praveen</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        {/* ---- second row ------- */}
        <div className="row justify-content-evenly mt-4 mb-4">
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Team1} />
              <Card.Body>
                <Card.Title>Chakravarthi</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Team1} />
              <Card.Body>
                <Card.Title>Suraj</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Team1} />
              <Card.Body>
                <Card.Title>Shreyas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* ---------   Team Members ----------------- */}

      {/* ---------------- organization growth ------ */}
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <h4 className='text-center pt-5 pb-2'>Our Organization Growth</h4>
          <div className="col-md-5 mb-5">
            <div>
              <Image src={Growth} roundedCircle style={{ width: '450px', height: '450px' }} />
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <h5>MySQL Development</h5>
            <div className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-success" style={{ width: '25%' }}>25%</div>
            </div>
            <h5>Springboot Development</h5>
            <div className="progress mb-3" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info text-dark" style={{ width: '50%' }}>50%</div>
            </div>
            <h5>CSS Development</h5>
            <div className="progress mb-3" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning text-dark" style={{ width: '75%' }}>75%</div>
            </div>
            <h5>JavaScript Development</h5>
            <div className="progress mb-3" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: '100%' }}>100%</div>
            </div>
            <h5>React Development</h5>
            <div className="progress mb-3" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: '50%' }}>50%</div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- organization growth ------ */}

      <FooterContentComponent></FooterContentComponent>
    </div>
  )
}

export default Home