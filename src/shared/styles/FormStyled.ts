import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 280px;

  .form-text-field,
  .form-button {
    margin: 0.625rem;
  }

  .form-button {
    background-color: var(--primary-bg);
    color: #fff;
  }
  .form-button:hover {
    background-color: var(--secondary-bg);
  }

  .form-footter-text {
    margin-top: 0.625rem;
    font-weight: 400;
  }

  .form-link {
    cursor: pointer;
    font-weight: 500;
    color: #5f91db;
    text-decoration: none;
  }
  .form-create-account-link:active {
    color: #3675d3;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const FormContainerStyled = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;

  .form-container-image {
    margin: 0.625rem;
    width: 50%;
    height: 70%;
  }

  @media (max-width: 1368px) {
    width: 60%;
  }

  @media (max-width: 1280px) {
    width: 65%;
  }
  @media (max-width: 1150px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 85%;
  }
  @media (max-width: 900px) {
    width: 90%;
    height: 80%;
    flex-direction: column;

    .form-container-image {
      height: 40%;
    }
  }
`;
