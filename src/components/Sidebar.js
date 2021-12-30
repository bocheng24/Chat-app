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
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`

`;

const SideIcons = styled.div`

`;

const ProfileIcon = styled.div`

`;

function Sidebar() {
    return (
        <Wrapper>

            <LogoContainer>
                <img style={ {width: '100px', borderRadius: '50%'} } src={ logo } alt="" />
            </LogoContainer>

            <SideIcons>
                <i className="fas fa-inbox"></i>
            </SideIcons>
            <SideIcons>
                <i className="fas fa-cog"></i>
            </SideIcons>
            <SideIcons>
                <i className="fas fa-user-circle"></i>
            </SideIcons>
            <SideIcons>
                <i className="fas fa-bolt"></i>
            </SideIcons>
            <ProfileIcon>
                <img style={ {width: '100px', borderRadius: '50%'} } src={ profileImg } alt="" />
            </ProfileIcon>
        </Wrapper>
    )
}

export default Sidebar
