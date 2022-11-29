import { AppBar, Toolbar } from '@mui/material'
import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          hello
        </Toolbar>
      </AppBar>
      <Body>
        hellos
      </Body>
    </>
  )
};

export default App;