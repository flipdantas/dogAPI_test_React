import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  .content {
    & button {
      color: #fff;
      background: #f00;
      border: none;
      font-size: 22px;
      border-radius: 12px;
      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: pink;
      }

      & img {
        max-width: 70vw;
        max-height: 50vh;
      }

    }

  }
`