import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import logo from './assets/logo.png';

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  font-size: 2em;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 2em;
`;

const message: string = 'Hello armand'

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>hello</Toolbar>
      </AppBar>
      <Body>
        <Logo src={logo} />
        {message}
      </Body>
    </>
  );
}



export default App;
