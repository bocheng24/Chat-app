import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

import Sidebar from './components/Sidebar';
import Chatlist from './components/Chatlist';
import Chatview from './components/Chatview';

import './App.css';

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

  const [conversationData, setConversationData] = useState([]);
  const [conversationStat, setConversationStat] = useState(null);

  useEffect(() => {
    
    const q = query(collection(db, 'messages'), orderBy('lastUpdatedTime', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      
      let conversations = [];
      
      snapshot.docs.map(doc => {

        const conversation = {
          id: doc.id,
          ...doc.data()
        };

        conversations = [...conversations, conversation];

        setConversationData(conversations);        

      })
    })
    return () => unsubscribe();
    
  }, [])

  return (
    <Wrapper>
      <Sidebar user={ user } />
      <Chatlist user={ user } 
                conversationData={ conversationData } 
                conversationStat={ conversationStat }
                setConversationStat={ setConversationStat } 
      />
      <Main>
        <Chatview user={ user } conversationData={ conversationData } />
      </Main>
    </Wrapper>
  );
}

export default Home;
