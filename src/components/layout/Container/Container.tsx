import { Box } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Container: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {

  return (
    <>
    <Box >

        <NavBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
          }}
        >
          {children}
        </Box>{' '}
      </Box>
    </>
  );
};

export default Container;
