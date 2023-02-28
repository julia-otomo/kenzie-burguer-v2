import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.gray0};
  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    .logo {
      max-width: 160px;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 20px;

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        button {
          background: transparent;
          color: ${({ theme }) => theme.colors.gray150};
          transition: 0.3s;

          :hover {
            color: ${({ theme }) => theme.colors.gray300};
          }
        }
      }

      .shop-cart_container {
        position: relative;

        span {
          position: absolute;
          background-color: ${({ theme }) => theme.colors.primary};
          width: 20px;
          height: 24px;
          border-radius: 4px;
          text-align: center;
          padding: 0.2rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: ${({ theme }) => theme.colors.gray0};
          box-sizing: border-box;
          top: -40%;
          left: 70%;
        }
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }

    @media (max-width: 450px) {
      .nav {
        flex-direction: column;
      }
    }
  }
`;
