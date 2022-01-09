import React from 'react'
import styled from 'styled-components'

import logo from '../assets/chat-logo.png'

const Wrapper = styled.div`
    height: 100vh;
    width: calc(98% - 45px);
    max-width: 1600px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
`;

const ChatDetails = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`;

const Avatar = styled.div`
    height: 60px;
    width: 60px;
    object-fit: contain;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.7px solid #fd79a8;
    margin-right: 25px;


    img {
        height: 70%;
    }
`;

const ChatInfo = styled.div`
    flex: 1;
`;

const Name = styled.input`
    background: none;
    border: none;
    font-size: 28px;
    font-weight: 700;
    outline: none;
`;

const OnlineIndicator = styled.div`
    font-weight: 500;
    color: #95a5a6;

    span {
        color: #2ecc71;
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;

    i {
        color: #95a5a6;
        font-size: 22px;
        padding: 15px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            color: #fd79a8;
        }
    }   
`;

const MessageWrapper = styled.div`
    background-color: #323645;
    border-radius: 28px;
    margin-bottom: 50px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: scroll;
    padding: 12px;
`;

const Messages = styled.div`
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    overflow: scroll;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ActionButton = styled.div`
    margin: 20px;
    padding: 10px 15px;
    background-color: #424657;
    // height: 30px;
    // width: 30px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16x;

    &:hover {
        transform: translateY(-1.2px);
        background-color: #5a5e75;
    }

    &:active {
        transform: translateY(1.2px);
    }

`;

const MessageInput = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #424657;
    border-radius: 6px;

    transition: none;

    &:focus {
        border: 3px solid #fd79a8;
    }
`;

function Chatview() {
    return (

        <Wrapper>
            <ChatDetails>
                <Avatar>
                    <img src={ logo } alt="" />
                </Avatar>
                <ChatInfo>
                    <Name value={ "Andy" } />
                    <OnlineIndicator><span>•</span> Online</OnlineIndicator>
                </ChatInfo>
                <Icons>
                    <i className="fas fa-video" />
                    <i className="fas fa-file-code" />
                    <i className="fas fa-phone" />
                    <i className="fas fa-volume-up" />
                    <i className="fas fa-image" />
                </Icons>
            </ChatDetails>
            <MessageWrapper>
                <Messages>
                </Messages>
                <form>
                    <InputWrapper>
                        <ActionButton>
                            <i className="fas fa-plus"></i>
                        </ActionButton>
                        <MessageInput placeholder="Say something..." />
                        <ActionButton>
                            <i className="fas fa-arrow-circle-up"></i>
                        </ActionButton>
                    </InputWrapper>
                </form>
            </MessageWrapper>
        </Wrapper>

    )
}

export default Chatview
