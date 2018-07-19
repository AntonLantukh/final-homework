import styled from 'styled-components';

export const PlatformMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 80px);
  margin-bottom: -100px;
  background-color: rgb(242, 243, 245);
`;

export const PlatformWrapper = styled.div`
  width: 1200px;
  padding-top: 10px;

  &::after {
    display: block;
    content: '';
    height: 100px;
  }
`;

export const PlatformCenter = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

`