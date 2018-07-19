import styled from 'styled-components';

export const FormMain = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FormWrapper = styled.div`
  position: absolute; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 100vh;
  margin: 0 auto;
  z-index: 1;

  > img {
    width: 300px;
    height: 144px;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 11px 0;
    padding: 9px 0;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(195, 195, 195);
    border-radius: 7px;

    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: '';
      background: transparent;
      border-radius 7px;
      box-shadow: 0 0 68px 4px rgba(0, 0, 0, 0.23);
      z-index: -1;
    }
  }
`;
export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const FieldLabel = styled.img`
  position: absolute;
  top: 25px;
  left: 21px;
  width: 19px;
  height: 19px;
  opacity: 0.4;
`;

export const StyledInput = styled.input`
  width: calc(100% - 62px);
  margin: 10px 0;
  padding: 16px 6px 16px 53px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 7px;
`;

export const MainButton = styled.button`
  margin: 10px 0;
  padding: 12px 0;
  background-color: rgb(72, 182, 226);
  color: rgb(255, 255, 255);
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1.1px;
  border: none;
  cursor: pointer;
`;

export const Warning = styled.p`
  color: rgb(255, 0, 0);
`;
