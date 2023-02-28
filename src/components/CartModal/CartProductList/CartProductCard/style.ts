import styled from 'styled-components';

export const StyledCartProductCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.gray100};

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    @media (max-width: 450px) {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .contentBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    gap: 20px;

    .product-information_container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .product-quantity_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 30px;

        button {
          height: 100%;
          width: 29px;
          background-color: ${({ theme }) => theme.colors.gray100};
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          &:hover {
            background-color: ${({ theme }) => theme.colors.gray300};
          }
        }
        span {
          width: 50px;
          text-align: center;
          border: 1px solid ${({ theme }) => theme.colors.gray100};
          height: 100%;
          padding: 0.35rem;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
        }
      }
    }

    .delete_button {
      background: transparent;
      opacity: 0.4;
      transition: 0.4s;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
