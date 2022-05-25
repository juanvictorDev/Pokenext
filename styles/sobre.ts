import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:2rem;
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Texto = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-right: 5rem;

  h1{
    color: #8257e6;
    font-size: 3rem;
  }

  p{
    font-size: 1.3rem;
    text-align: justify;
  }

  button{
    width: 7rem;
    height: 3rem;
    background-color:#8257e6;
    border:none;
    border-radius: 1rem;
    margin-top: 1.5rem;
    transition: .3s;
    cursor: pointer;
    box-shadow: 0 .35rem 0 #4f2da1;

    a{
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }

    &:active{
      position:relative;
      left:2px;
      top:3px;
    }
  }
`

export const Button = styled.button`
  width: 7rem;
  height: 3rem;
  background-color:#8257e6;
  border:none;
  border-radius: 1rem;
  margin-top: 1.5rem;
  transition: .3s;
  cursor: pointer;
  box-shadow: 0 .35rem 0 #4f2da1;

  a{
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  &:active{
    position:relative;
    left:2px;
    top:3px;
  }
`