import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Contraseña es requerida')
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  return (
    <Container className="mt-5">
      <Card
        className="mx-auto shadow"
        style={{
          maxWidth: '420px',
          backgroundColor: '#1c1c1c',
          color: '#ffffff',
          border: '2px solid #ff0000',
          borderRadius: '12px'
        }}
      >
        <Card.Body>
          <div className="text-center mb-4">
            <FaCar size={40} color="#ff0000" />
            <h2 style={{ fontFamily: 'Impact, sans-serif', marginTop: '10px' }}>
              Acceso Garage
            </h2>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const result = await login(values.email, values.password);
                if (result.success) {
                  navigate('/');
                } else {
                  setError(result.error);
                }
              } catch (err) {
                setError('Error al iniciar sesión');
              }
              setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo</label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-control bg-dark text-white border-danger ${errors.email && touched.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && touched.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <Field
                    name="password"
                    type="password"
                    className={`form-control bg-dark text-white border-danger ${errors.password && touched.password ? 'is-invalid' : ''}`}
                  />
                  {errors.password && touched.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="danger"
                  className="w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Arrancando motor...' : 'Encender'}
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
