'use client'
import { useState } from 'react';
import { Button } from "@mui/material";
import SignUpForm from '../SignUpForm/SignUpForm'
import SignInForm from '../SignInForm/SignInForm'
import styles from '../OpenModal/OpenModal.module.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const OpenModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Modal = ({ isOpen, onClose }) => {
    const handleContainerClick = (e) => {
      // Verificar si el clic se realizó fuera del contenido del modal
      if (e.target.classList.contains(styles.modalOverlay)) {
        onClose();
      }
    };

    return (
      <>
        {isOpen && (
          <div className={styles.modalOverlay} onClick={handleContainerClick}>
            <div className={styles.modal}>
              <button><CloseRoundedIcon onClick={onClose}/></button>
              { props.whatButton === "SignIn" ? (
                <SignInForm onClose={onClose} />
              ):(
                <SignUpForm onClose={onClose} />
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
        { props.whatButton === "SignIn" ? (
            <Button variant="outlined" color="error" onClick={openModal}>Iniciar Sesion</Button>
        ):(
            <Button variant="contained" color="error" onClick={openModal}>Registrarse</Button>
        )}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default OpenModal;
