import React, { useState } from 'react'
import styled from 'styled-components'
import { getAuth, signOut } from 'firebase/auth'

import logo from '../assets/chat-logo.png'
// import profileImg from '../assets/profile1.jpg'


const Wrapper = styled.div`
    height: calc(100vh - 100px);
    padding: 50px 0;
    width: 120px;
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
            color: #fd79a8;
        }
    }
`;

const ProfileIcon = styled.div`
    object-fit: contain;
    height: 70px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    overflow: hidden;
    
    img {
        height: 100%;

        &:hover {
            --webkit-box-shadow: 0 5px 24px -3px #fd79a8;
            box-shadow: 0 5px 24px -3px #fd79a8;
        }
    }

    &:hover {
        transform: scale(1.05);
    }
`;

function Sidebar({ user }) {
    const auth = getAuth();
    const [activeIcon, setActiveIcon] = useState('inbox');
    const { username, avatar } = user;
    console.log('side bar: ', user)

    return (
        <Wrapper>

            <LogoContainer>
                <img src={ logo } alt="chat-logo" />
            </LogoContainer>

            <SideIcons>
                <SideIcon onClick={() => setActiveIcon('inbox')}>
                    <i className="fas fa-inbox" style={ {color: activeIcon === 'inbox' && '#fd79a8'} }></i>
                </SideIcon>
                <SideIcon onClick={() => setActiveIcon('cog')}>
                    <i className="fas fa-cog" style={ {color: activeIcon === 'cog' && '#fd79a8'} }></i>
                </SideIcon>
                <SideIcon onClick={() => setActiveIcon('user')}>
                    <i className="fas fa-user-circle" style={ {color: activeIcon === 'user' && '#fd79a8'} }></i>
                </SideIcon>
                <SideIcon onClick={() => setActiveIcon('bolt')}>
                    <i className="fas fa-bolt" style={ {color: activeIcon === 'bolt' && '#fd79a8'} }></i>
                </SideIcon>
            </SideIcons>
            <ProfileIcon onClick={() => signOut(auth)}>
                <img src={ avatar } alt={ username } />
            </ProfileIcon>
        </Wrapper>
    )
}

export default Sidebar
