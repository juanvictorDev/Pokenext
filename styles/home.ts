import styled from 'styled-components';

export const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  a{
    text-decoration: none;
    color: white;
    position: absolute;
    right: 0;
    
    padding-right: 5rem;
    padding-bottom: 6rem;
    font-weight: 200;
    font-size: 1rem;

    transition: .3s;


    &:hover{
      color: gray;
    }
  }
`

export const Lista = styled.main`
  max-width:84%;
  width:100%;
  margin:5rem auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Card = styled.div`
  height: 15rem;
  width: 13rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  background-color: #23222b;
  border-radius: 1rem;
  cursor: pointer;

  transition: .3s;

  &:hover{
    box-shadow: 7px 7px 0 #8257e6;
    height: 16rem;
    width: 14rem;
  }

  p{
    background-color: #8257e6;
    border-radius: 5px; 
    margin-top: 1rem;
    padding: 1px;
  }

  a{
    text-decoration: none;
    color: #8257e6;
    font-size:1rem;

    transition: .3s;


    &:hover{
      color: #b090f9;
    }
  }
`