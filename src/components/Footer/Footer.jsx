import React, { PureComponent } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import logo from './img/Logo-white.svg';
import {
  FooterMain,
  FooterWrapper,
  FooterParagraph,
  FooterLink,
  FooterLogo
} from './Style';

export default class Footer extends PureComponent {
  render() {
    return (
      <FooterMain>
        <FooterWrapper>
          <FooterParagraph>
            Сделано с любовью и старанием на курсе "React.js" в{' '}
            <FooterLink>Loftschool</FooterLink>.<br /> Автор работы:{' '}
            <b>Кистанов Дмитрий</b>.
          </FooterParagraph>
          <FooterLogo src={logo} alt="logo" />
        </FooterWrapper>
      </FooterMain>
    );
  }
}