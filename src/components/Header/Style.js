import styled from 'styled-components';

export const HeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  background-color: rgb(43, 44, 46);
  color: rgb(255, 255, 255);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  color: rgb(255, 255, 255);
`;

export const HeaderCurrency = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderCurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 0 8px;
  text-align: center;
  text-decoration: none;
  cursor: auto;
  color: rgb(255, 255, 255);
`;

export const HeaderLogo = styled.img`
  width: 180px;
`;
