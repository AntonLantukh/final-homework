import styled from 'styled-components';

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 298px;
`;

export const AccountInput = styled.div`
  flex: 1 1 150px;
  margin: 5px 0;
  padding: 6px 0;
  background-color: rgb(65, 66, 68);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  color: rgb(255, 255, 255);
`;

export const AccountCurrency = styled.p`
  flex: 1 1;
  margin: 15px 0 0 15px;
  text-align: left;
`;

export const AccountInteger = styled.span`
  display: inline-block;
  width: 55%;
  text-align: right;
  color: rgb(255, 255, 255);
`;

export const AccountFloat = styled.span`
  display: inline-block;
  max-width: 78px;
  vertical-align: bottom;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(138, 138, 138);
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
