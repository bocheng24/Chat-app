import React from 'react'
import styled from 'styled-components';

import logo from '../assets/chat-logo.png'

const conData = [
    {
        name: "Andy",
        avatar: logo,
        lastMsg: "Hi Andy"
    },

    {
        name: "Paul",
        avatar: logo,
        lastMsg: "Have you had lunch?"
    }
];

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
    margin-bottom: 15px;
    padding: 15px;
    cursor: pointer;
    border-radius: 12px;

    &:hover {
        background-color: #fd79a8;
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

function Chatlist({ user }) {
    const { name, avatar } = user;

    return (
        <Wrapper>
            <Title>Chats</Title>
            <Subtitle>Last Messages</Subtitle>
            <Conversations>
                {
                    conData.map((data, idx) => (
                        <ConversationCard>
                            <Avatar>
                                <img src={ avatar } alt={ name } />
                            </Avatar>
                            <ConversationInfo>
                                <h3>{ data.name }</h3>
                                <LastMsg>{ data.lastMsg }</LastMsg>
                            </ConversationInfo>
                        </ConversationCard>
                    ))
                }
            </Conversations>
        </Wrapper>
    )
}

export default Chatlist
