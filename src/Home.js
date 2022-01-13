import styled from 'styled-components';
import './App.css';

import Sidebar from './components/Sidebar';
import Chatlist from './components/Chatlist';
import Chatview from './components/Chatview';


const Wrapper = styled.div`
  background-color: #282a37;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

function Home({ user }) {
  return (
    <Wrapper>
      <Sidebar user={ user } />
      <Chatlist user={ user } />
      <Main>
        <Chatview user={ user } />
      </Main>
    </Wrapper>
  );
}

export default Home;
