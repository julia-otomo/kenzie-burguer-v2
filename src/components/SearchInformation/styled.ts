import styled from 'styled-components';

export const StyledSearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 80%;
  align-self: center;

  .search_title {
    text-align: center;
  }

  @media (min-width: 601px) {
    flex-direction: row;
    gap: 0.1rem;
    justify-content: center;
  }
`;
