import styled from 'styled-components'

export const AppContainer = styled.div`
  border: 4px solid black;
  border-radius: 1rem;
  height: 100vh;
  box-sizing: border-box;
  width: 40vw;
  min-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`
export const Screen = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  height: 6%;
`
export const InputName = styled.input`
  width: 25%;
  border: none;
  padding: 0.5rem;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom-left-radius: 0.65rem;
`
export const InputMessage = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0.5rem;
  border-top: 1px solid lightgray;
`
export const Button = styled.button`
  width:20%;
  border: none;
  cursor: pointer;
  background-color: lightgreen;
  border-bottom-right-radius: 0.65rem;
  
  &:hover {
    color: white;
    background-color: green;
  }
`