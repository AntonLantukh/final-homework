import styled from 'styled-components';

export const ChartMain = styled.article`
  width: 750px;
`;

export const ChartWrapper = styled.div`
  height: 448px;
  margin-top: 15px;
  border-radius: 3px;
  border: 1px solid rgb(237, 240, 241);
`;

export const ChartButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-top: 10px;
  background-color: rgb(237, 240, 241);
`;

export const Button = styled.button`
  margin: 0 4px;
  padding: 2px 16px;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  color: rgb(153, 152, 161);
`;

export const ButtonActive = Button.extend`
  background-color: transparent;
  color: rgb(106, 180, 221);
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

export const Error = styled.div`
  width: 400px;
  text-align: center;
  margin: 10px auto 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
