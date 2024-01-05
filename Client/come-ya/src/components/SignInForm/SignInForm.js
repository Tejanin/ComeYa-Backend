import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './SignInForm.module.css'
import { Button } from '@mui/material';

const SignUp = ({ onClose }) => {
  /*const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Datos del formulario:', formData);
    alert('Datos del formulario:', formData);
    // Cerrar el modal
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Mensaje:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );*/


  const[ChangeOnSubmit, setChangeOnSubmit] = useState(false);

  return (
    <Formik

      initialValues={{
        email: '',
        password: '',

      }}
      validate={(values) => {
        let error = {};

        //Email Validation
        if(!values.email){
          error.email = 'Por favor ingresa un correo electronico'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
          error.email = 'El email solo puede contener letras y espacios!'
        }

        //Password Validation
        if(!values.password){
          error.password = 'Por favor ingresa una contraseña'
        } else if (
        !/(?=.*[a-z])/.test(values.password) || // al menos una letra minúscula
        !/(?=.*[A-Z])/.test(values.password) || // al menos una letra mayúscula
        !/(?=.*\d)/.test(values.password) ||    // al menos un número
        !/(?=.*[@$!%*?&])/.test(values.password) // al menos un símbolo
        ) {
          error.password = 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo.';

        } else if (values.password.length < 6) {
          error.password = 'La contraseña debe tener al menos 6 caracteres.';
        }

        return error;
      }}

      onSubmit={({resetForm}) => {
        /*resetForm();*/ //Resetear formulario
        setChangeOnSubmit(true);
        setTimeout(() => setChangeOnSubmit(false), 5000);
        onClose();
      }}
    >   
      {( {errors } ) => (
        <Form className={styles.formulario}>
          <div>
            <label htmlFor='email'>Correo electrónico:</label>
            <Field 
              type="email" 
              id='email' 
              name="email" 
              placeholder='juan@gmail.com'
              />
              <ErrorMessage name='email' component={() => (
                <div className={styles.error}>{errors.email}</div>
              )}/>
          </div>
          <div>
            <label htmlFor='password'>Contraseña:</label>
            <Field 
              type="password" 
              id='password' 
              name="password" 
              />
              <ErrorMessage name='password' component={() => (
                <div className={styles.error}>{errors.password}</div>
              )}/>
          </div>
          
          <Button type="submit">Enviar</Button>
        </Form>
      )}
    </Formik>
  )
};

export default SignUp;