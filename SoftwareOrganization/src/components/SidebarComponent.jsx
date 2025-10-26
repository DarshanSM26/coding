import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const SidebarComponent = () => {
  return (
    <div className="sidebar bg-light border-end" style={{ minHeight: '100vh', width: '250px' }}>
      <div className="p-3">
        <h5 className="mb-3">Navigation</h5>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/home" className="text-dark mb-2">
            <i className="bi bi-house-door me-2"></i>Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="text-dark mb-2">
            <i className="bi bi-gear me-2"></i>Services
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-dark mb-2">
            <i className="bi bi-info-circle me-2"></i>About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-dark mb-2">
            <i className="bi bi-envelope me-2"></i>Contact Us
          </Nav.Link>
        </Nav>
      </div>
    </div>
  )
}

export default SidebarComponent