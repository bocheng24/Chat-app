import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import auth from 'firebase/auth'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { provider } from './firebase'
import { doc, 
        collection, 
        query, 
        setDoc, 
        getDocs, 
        where, 
        onSnapshot 
    } from 'firebase/firestore'
import { db } from './firebase'

import Home from './Home'

const Wrapper = styled.div`
  background-color: #282a37;
  height: 100vh;
  width: 100wh;
  // min-height: 100vh;
  // max-height: 100vh;
  // min-width: 100vw;
  // max-width: 100vw;
  display: flex;
`

const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  margin-bottom: 25px;
  letter-spacing: 0.55px;
`

const SignInBtn = styled.div`
  border: none;
  background-color: #e84393;
  padding: 15px 25px;
  border-radius: 6.5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: #fd79a8;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(1px);
  }

`

function App() {

  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        // console.log('user: ', user.uid)
        setUser({
          name: user.displayName,
          email: user.email,
          avatar: `https://avatars.dicebear.com/api/open-peeps/${user.photoURL}.svg`
        })
      } else {
        setUser(null);
      }
      
    })
  }, [])



  const handleUserSignIn = async () => {

    const signin = await signInWithPopup(auth, provider);
    
    const curUser = {
      id: signin.user.uid,
      username: signin.user.displayName,
      email: signin.user.email,
      avatar: `https://avatars.dicebear.com/api/open-peeps/${signin.user.uid}.svg` 
    }
    
    const userRef = doc(db, 'users', signin.user.uid)
    await setDoc(userRef, curUser)

    const q_users = collection(db, 'users');
    const currentUser = query(q_users, where('id', '==', signin.user.uid));

    const unsubscribe = onSnapshot(currentUser, (snapshot) => {
      snapshot.docs.map(doc => setUser(doc.data()))
    })

    return () => unsubscribe()
  }

  return (
    <Wrapper>
      {
        user ? <Home user={user} setUser={setUser} /> 
             : (
                <SignInContainer>
                  <Title>Sign In to continue</Title>
                  <SignInBtn onClick={ handleUserSignIn }>Click To Sign in</SignInBtn>
                </SignInContainer>
             )
      }
    </Wrapper>
  )
}

export default App

