import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './SignUpForm.module.css'
import { Button } from '@mui/material';
import { useToast } from '@chakra-ui/react'

const SignUpForm = ({ onClose }) => {

  const[ChangeOnSubmit, setChangeOnSubmit] = useState(false);
  const toast = useToast()

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        confirmingPassword: '',

      }}
      validate={(values) => {
        let error = {};

        //Name Validation
        if(!values.name){
          error.name = 'Por favor ingresa un nombre'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
          error.name = 'El nombre solo puede contener letras y espacios!'
        }

        //LastName Validation
        if(!values.lastName){
          error.lastName = 'Por favor ingresa un apellido'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)){
          error.lastName = 'El apellido solo puede contener letras y espacios!'
        }

        //Phone Validation
        if(!values.phone){
          error.phone = 'Por favor ingresa un télefono'
        } else if (!/^[0-9]{10}$/.test(values.phone)) {
          error.phone = 'El télefono no tiene la cantidad de digitos correcta!'
        }

        //Phone Validation
        if(!values.gender){
          error.gender = 'Por favor seleccionar un opción'
        }

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

        //confirmingPassword Validation
        if(!values.confirmingPassword){
          error.confirmingPassword = 'Por favor confirme la contraseña'
        } else if (values.confirmingPassword !== values.password) {
          error.confirmingPassword = 'Las contraseñas no coinciden.';
        }

        return error;
      }}

      onSubmit={({resetForm}) => {
        /*resetForm();*/ //Resetear formulario
        setChangeOnSubmit(true);
        setTimeout(() => setChangeOnSubmit(false), 5000);
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          variant: "subtle",
          position: "top-right",
          duration: 8000,
        })
        onClose();
      }}
    >   
      {( {errors } ) => (
        <Form className={styles.formulario}>
          <div>
            <label htmlFor='name'>Nombre:</label>
            <Field 
              type="text" 
              id='name' 
              name="name" 
              placeholder='Juan'
              />
              <ErrorMessage name='name' component={() => (
                <div className={styles.error}>{errors.name}</div>
              )}/>
          </div>
          <div>
            <label htmlFor='lastName'>Apellido:</label>
            <Field 
              type="text" 
              id='lastName' 
              name="lastName" 
              placeholder='Perez'
              />
              <ErrorMessage name='lastName' component={() => (
                <div className={styles.error}>{errors.lastName}</div>
              )}/>
          </div>
          <div>
            <label htmlFor='phone'>Télefono:</label>
            <Field 
              type="number" 
              id='phone' 
              name="phone" 
              />
              <ErrorMessage name='phone' component={() => (
                <div className={styles.error}>{errors.phone}</div>
              )}/>
          </div>
          <div>
            <label htmlFor='gender'>Cuál es tu género?</label>
              <Field 
                type="radio" 
                name="gender" 
                value="male" 
                label='Hombre'/>
                Masculino<br />
              <Field 
                type="radio" 
                name="gender" 
                value="female" />
              Femenino<br />
              <Field 
                type="radio" 
                name="gender" 
                value="other" />
                Otro
              {/*<Field as="select" name="gender">
             <option value="male">Hombre</option>
             <option value="female">Mujer</option>
             <option value="other">Otro</option>
              </Field>*/}
              <ErrorMessage name='gender' component={() => (
                <div className={styles.error}>{errors.gender}</div>
              )}/>
          </div>
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
          <div>
            <label htmlFor='confirmingPassword'>Confirmar contraseña:</label>
            <Field 
              type="password" 
              id='confirmingPassword' 
              name="confirmingPassword" 
              />
              <ErrorMessage name='confirmingPassword' component={() => (
                <div className={styles.error}>{errors.confirmingPassword}</div>
              )}/>
          </div>
          <Button type="submit">Enviar</Button>
          {/*ChangeOnSubmit && <p className={styles.exito}>Formulario enviado con exito!</p>*/}
        </Form>
      )}
    </Formik>
  )
};

export default SignUpForm;