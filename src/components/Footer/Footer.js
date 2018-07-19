import React, { Component } from 'react';
import logo from './img/Logo-white.svg';
import {
  FooterMain,
  FooterWrapper,
  FooterParagraph,
  FooterLink,
  FooterLogo
} from './Style';

export default class Footer extends Component {
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
