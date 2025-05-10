import React from 'react';
import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';

const AdminDashboard = () => {
  const drivers = [
    { id: 1, name: 'Carlos Torres', email: 'carlos@autos.com', role: 'conductor' },
    { id: 2, name: 'Lucía Méndez', email: 'lucia@autos.com', role: 'mecánico' },
    { id: 3, name: 'Pedro Díaz', email: 'pedro@autos.com', role: 'admin' }
  ];

  const serviceCoupons = [
    { id: 1, title: 'Cambio de Aceite', price: 29.99, status: 'active', sales: 75 },
    { id: 2, title: 'Lavado Premium', price: 14.99, status: 'active', sales: 120 },
    { id: 3, title: 'Alineación y Balanceo', price: 39.99, status: 'inactive', sales: 45 }
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4">Panel de Control Automotriz</h1>
      
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-white" style={{ backgroundColor: '#343a40' }}>
            <Card.Body>
              <Card.Title>Conductores Registrados</Card.Title>
              <Card.Text className="display-4">320</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white bg-danger">
            <Card.Body>
              <Card.Title>Servicios Vendidos</Card.Title>
              <Card.Text className="display-4">1,024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white bg-secondary">
            <Card.Body>
              <Card.Title>Cupones Activos</Card.Title>
              <Card.Text className="display-4">7</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h3>Gestión de Conductores</h3>
            </Card.Header>
            <Card.Body>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map(driver => (
                    <tr key={driver.id}>
                      <td>{driver.id}</td>
                      <td>{driver.name}</td>
                      <td>{driver.email}</td>
                      <td>{driver.role}</td>
                      <td>
                        <Button variant="dark" size="sm" className="me-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>
              <h3>Cupones de Servicio</h3>
            </Card.Header>
            <Card.Body>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Servicio</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Usos</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceCoupons.map(coupon => (
                    <tr key={coupon.id}>
                      <td>{coupon.id}</td>
                      <td>{coupon.title}</td>
                      <td>${coupon.price}</td>
                      <td>
                        <Badge bg={coupon.status === 'active' ? 'success' : 'danger'}>
                          {coupon.status}
                        </Badge>
                      </td>
                      <td>{coupon.sales}</td>
                      <td>
                        <Button variant="dark" size="sm" className="me-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
