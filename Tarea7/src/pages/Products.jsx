import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Products = () => {
  const carExperiences = [
    {
      id: 1,
      title: 'Ruta en Autos Clásicos',
      description: 'Conduce autos clásicos por paisajes increíbles',
      price: 499.99,
      features: ['3 horas de conducción', 'Guía profesional', 'Seguro incluido'],
      image: 'https://via.placeholder.com/300x200?text=Autos+Clásicos'
    },
    {
      id: 2,
      title: 'Experiencia en Pista',
      description: 'Vive la adrenalina en un circuito profesional',
      price: 799.99,
      features: ['5 vueltas en superdeportivos', 'Instrucción previa', 'Casco y equipo incluido'],
      image: 'https://via.placeholder.com/300x200?text=Experiencia+Pista'
    },
    {
      id: 3,
      title: 'Test Drive de Lujo',
      description: 'Conduce autos de lujo en ciudad y carretera',
      price: 999.99,
      features: ['Autos como Ferrari y Lamborghini', '2 horas de conducción', 'Rutas exclusivas'],
      image: 'https://via.placeholder.com/300x200?text=Test+Drive+Lujo'
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Experiencias Automovilísticas</h1>
      <Row className="g-4">
        {carExperiences.map((experience) => (
          <Col key={experience.id} md={4}>
            <Card className="h-100 shadow-sm border border-dark">
              <Card.Img variant="top" src={experience.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center text-uppercase fw-bold">
                  {experience.title}
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  {experience.description}
                </Card.Text>
                <ul className="list-unstyled mb-4">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-speedometer2 text-primary me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-center">
                  <h4 className="mb-3 text-danger">${experience.price}</h4>
                  <Button variant="dark" className="w-100">
                    Reservar Ahora
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
