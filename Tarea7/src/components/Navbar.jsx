import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">Carros</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link as={Link} to="/">Productos</Nav.Link>
                <Nav.Link as={Link} to="/profile">Mi Perfil</Nav.Link>
                {user.role === 'admin' && (
                  <Nav.Link as={Link} to="/admin">Panel Admin</Nav.Link>
                )}
                {(user.role === 'moderator' || user.role === 'admin') && (
                  <Nav.Link as={Link} to="/moderate">Moderación</Nav.Link>
                )}
              </>
            )}
          </Nav>
          <Nav>
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">Mi Perfil</Dropdown.Item>
                  {user.role === 'admin' && (
                    <Dropdown.Item as={Link} to="/admin">Panel Admin</Dropdown.Item>
                  )}
                  {(user.role === 'moderator' || user.role === 'admin') && (
                    <Dropdown.Item as={Link} to="/moderate">Moderación</Dropdown.Item>
                  )}
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 