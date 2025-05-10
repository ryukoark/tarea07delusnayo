import React from 'react';
import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import { FaWrench, FaCarCrash, FaTools, FaEye, FaCheck, FaTimes } from 'react-icons/fa';

const ModeratorDashboard = () => {
  const reports = [
    { id: 1, user: 'Usuario 1', type: 'Comentario inapropiado', status: 'Pendiente', date: '2024-05-05' },
    { id: 2, user: 'Usuario 2', type: 'Spam', status: 'En revisión', date: '2024-05-04' },
    { id: 3, user: 'Usuario 3', type: 'Contenido fraudulento', status: 'Resuelto', date: '2024-05-03' }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      'Pendiente': 'danger',
      'En revisión': 'warning',
      'Resuelto': 'success'
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center"><FaTools className="me-2" />Centro de Control Automotriz</h1>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="bg-danger text-white shadow-sm">
            <Card.Body>
              <Card.Title><FaCarCrash className="me-2" />Reportes Pendientes</Card.Title>
              <Card.Text className="display-5 fw-bold text-center">12</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-warning text-dark shadow-sm">
            <Card.Body>
              <Card.Title><FaWrench className="me-2" />En Revisión</Card.Title>
              <Card.Text className="display-5 fw-bold text-center">5</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-success text-white shadow-sm">
            <Card.Body>
              <Card.Title><FaTools className="me-2" />Resueltos Hoy</Card.Title>
              <Card.Text className="display-5 fw-bold text-center">8</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow">
        <Card.Header className="bg-dark text-white">
          <h4><FaEye className="me-2" />Inspección de Reportes</h4>
        </Card.Header>
        <Card.Body>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Conductor</th>
                <th>Tipo de Fallo</th>
                <th>Estado</th>
                <th>Fecha de Diagnóstico</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.user}</td>
                  <td>{report.type}</td>
                  <td>{getStatusBadge(report.status)}</td>
                  <td>{report.date}</td>
                  <td>
                    <Button variant="info" size="sm" className="me-2"><FaEye /></Button>
                    <Button variant="success" size="sm" className="me-2"><FaCheck /></Button>
                    <Button variant="danger" size="sm"><FaTimes /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="shadow">
            <Card.Header className="bg-secondary text-white">
              <h4><FaTools className="me-2" />Estadísticas del Taller</h4>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Inspecciones Totales:</span>
                <strong>125</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tiempo promedio de reparación:</span>
                <strong>2.5 horas</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Vehículos inhabilitados:</span>
                <strong>8</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ModeratorDashboard;
