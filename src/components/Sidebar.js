import React from 'react'
import styled from 'styled-components'

import logo from '../assets/chat-logo.png'
import profileImg from '../assets/profile1.jpg'

const Wrapper = styled.div`
    height: calc(100vh - 100px);
    padding: 50px 0;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    object-fit: contain;
    height: 70px;

    img {
        height: 100%;
    }

`;

const SideIcons = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const SideIcon = styled.div`
    i {
        color: #95a5a6;
        font-size: 28px;
        padding: 28px;
        cursor: pointer;

        &:hover {
            color: #ff6b6b;
        }
    }
`;

const ProfileIcon = styled.div`
    object-fit: contain;
    height: 70px;
    cursor: pointer;

    img {
        height: 100%;
        border-radius: 50%;

        &:hover {
            --webkit-box-shadow: 0 5px 24px -3px #ff6b6b;
            box-shadow: 0 5px 24px -3px #ff6b6b;
        }
    }

    &:hover {
        transform: scale(1.05);
    }
`;

function Sidebar() {
    return (
        <Wrapper>

            <LogoContainer>
                <img src={ logo } alt="" />
            </LogoContainer>

            <SideIcons>
                <SideIcon>
                    <i className="fas fa-inbox"></i>
                </SideIcon>
                <SideIcon>
                    <i className="fas fa-cog"></i>
                </SideIcon>
                <SideIcon>
                    <i className="fas fa-user-circle"></i>
                </SideIcon>
                <SideIcon>
                    <i className="fas fa-bolt"></i>
                </SideIcon>
            </SideIcons>
            <ProfileIcon>
                <img src={ profileImg } alt="" />
            </ProfileIcon>
        </Wrapper>
    )
}

export default Sidebar
