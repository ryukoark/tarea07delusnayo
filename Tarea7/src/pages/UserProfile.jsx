import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';

const UserProfile = () => {
  const userVehicles = [
    { id: 1, model: 'Ford Mustang GT', purchaseDate: '2024-05-01', status: 'Activo', expires: '2024-06-01' },
    { id: 2, model: 'Chevrolet Camaro ZL1', purchaseDate: '2024-04-15', status: 'Activo', expires: '2024-05-15' },
    { id: 3, model: 'Tesla Model S', purchaseDate: '2024-03-20', status: 'Expirado', expires: '2024-04-20' }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      'Activo': 'success',
      'Expirado': 'danger',
      'Pendiente': 'warning'
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <div className="mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
                  alt="Avatar"
                  className="rounded-circle"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <h3>tizando</h3>
              <p className="text-muted">tizando@email.com</p>
              <Button variant="dark" className="w-100 mb-2">Editar Perfil</Button>
              <Button variant="outline-dark" className="w-100">Actualizar Contraseña</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-dark text-white">
              <h5 className="mb-0">Garaje Virtual</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Vehículos Activos
                  <Badge bg="success">2</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Total Invertido
                  <Badge bg="primary">$209,999</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Miembro desde
                  <span>Febrero 2024</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card>
            <Card.Header className="bg-dark text-white">
              <h4 className="mb-0">Mis Vehículos</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {userVehicles.map(car => (
                  <ListGroup.Item key={car.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">{car.model}</h5>
                        <small className="text-muted">
                          Comprado: {car.purchaseDate} | Garantía hasta: {car.expires}
                        </small>
                      </div>
                      <div>
                        {getStatusBadge(car.status)}
                        <Button variant="outline-secondary" size="sm" className="ms-2">
                          Ver Ficha
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header className="bg-dark text-white">
              <h4 className="mb-0">Historial de Compras</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">Ford Mustang GT</h5>
                    <small className="text-muted">01/05/2024</small>
                  </div>
                  <div>
                    <span className="text-success">$89,999</span>
                    <Badge bg="success" className="ms-2">Entregado</Badge>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">Chevrolet Camaro ZL1</h5>
                    <small className="text-muted">15/04/2024</small>
                  </div>
                  <div>
                    <span className="text-success">$119,999</span>
                    <Badge bg="success" className="ms-2">Entregado</Badge>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
