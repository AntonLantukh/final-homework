import styled from 'styled-components';

export const BalanceTable = styled.table`
  width: 100%;
  margin: 40px 0;
  text-align: right;
  border: 1px solid rgb(237, 240, 241);
  border-collapse: collapse;
  border-radius: 3px;
`;

export const BalanceTableHeader = styled.tr`
  border: 1px solid rgb(237, 240, 241);
  background-color: rgb(237, 240, 241);
`;

export const BalanceTableTh = styled.th`
  padding: 5px 10px;
  border: 1px solid rgb(237, 240, 241);
`;

export const BalanceTableTr = styled.tr`
  border: 1px solid rgb(237, 240, 241);
`;

export const BalanceTableTd = styled.td`
  padding: 5px 10px;
  border: 1px solid rgb(237, 240, 241);
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;
