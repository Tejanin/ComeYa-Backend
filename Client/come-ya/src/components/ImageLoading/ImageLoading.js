import { Spinner } from '@chakra-ui/react'

const ImageLoading = () => {
    <div style={styles.background}>
        <Spinner/>
    </div>
}

const styles = {
    background: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  export default ImageLoading;

