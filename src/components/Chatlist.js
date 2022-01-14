import React from 'react'
import styled from 'styled-components';

// import logo from '../assets/chat-logo.png'

const Wrapper = styled.div`
    height: calc(100vh - 100px);
    padding: 50px 45px;
    width: 300px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
`;

const Title = styled.div`
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 65px;
`;

const Subtitle = styled.div`
    font-size: 20px;
    padding-left: 2px;
    letter-spacing: 1.1px;
    margin-bottom: 45px;
    color: #12CBC4;
    font-weight: 500;
`;

const Conversations = styled.div`
`;

const ConversationCard = styled.div`
    display: flex;
    align-items: center;
    margin-left: -10px;
    margin-bottom: 12px;
    padding: 15px;
    cursor: pointer;
    border-radius: 12px;
    background-color: #303952;

    &:hover {
        background-color: #596275;
    }


`;

const Avatar = styled.div`
    height: 70px;
    margin-right: 25px;
    border-radius: 50%;
    overflow: hidden;

    img {
        height: 100%;    
    }
`;

const ConversationInfo = styled.div`
    flex: 1;

    h3 {
        color: #9c88ff;
    }
`;

const LastMsg = styled.div`
    font-size: 13.5px;
    padding: 3px 0;
`;

function Chatlist({ user, conversationData, curConversation, setCurConversation }) {
    // const { name, avatar } = user;

    return (
        <Wrapper>
            <Title>Chats</Title>
            <Subtitle>Last Messages</Subtitle>
            <Conversations>

                {
                    conversationData.map(data => (
                        <ConversationCard onClick={ () => setCurConversation(data) }
                                          key={ data.id }
                                          style={
                                            {backgroundColor: curConversation !== null && data.id === curConversation.id && '#596275'} 
                                          }
                        >
                            <Avatar>
                                <img src={ data.avatar } alt={ data.name } />
                            </Avatar>
                            <ConversationInfo>
                                <h3>{ data.name }</h3>
                                <LastMsg>{ data.lastMessage }</LastMsg>
                            </ConversationInfo>
                        </ConversationCard>
                    ))
                }

            </Conversations>
        </Wrapper>
    )
}

export default Chatlist
