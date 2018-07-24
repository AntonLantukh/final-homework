import styled from 'styled-components';

export const FooterMain = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-weight: 100;
  background-color: rgb(31, 32, 34);
  color: rgb(255, 255, 255);
  font-size: 14px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

export const FooterParagraph = styled.p`
  width: 235px;
  line-height: 1.4;
`;

export const FooterLink = styled.a`
  border-bottom: 1px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-weight: 500;
`;

export const FooterLogo = styled.img`
  width: 180px;
`;
