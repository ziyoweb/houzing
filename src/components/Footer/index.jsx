/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Wrapper, Container, Content, IconWrap, Icons } from "./style";
import { FooterLinks } from "../../mock";

export const Why = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Content.Title>Contact Us</Content.Title>
          <ul className="footer__links">
            <li className="footer__link">
              <a
                target="_blank"
                href="https://maps.google.com"
                rel="noreferrer"
              >
                <IconWrap>
                  <Icons.Location />
                </IconWrap>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </a>
            </li>
            <li className="footer__link">
              <a href="tel:+998917713955">
                <IconWrap>
                  <Icons.Phone />
                </IconWrap>
                123 456 7890
              </a>
            </li>
            <li className="footer__link">
              <a href="mailto: ziyodulloyevm1@gmail.com">
                <IconWrap>
                  <Icons.Message />
                </IconWrap>
                support@houzing.com
              </a>
            </li>
          </ul>
          <ul className="socials">
            <li>
              <a target="_blank" href="https://facebook.com" rel="noreferrer">
                <IconWrap>
                  <Icons.Facebook />
                </IconWrap>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com" rel="noreferrer">
                <IconWrap>
                  <Icons.Twitter />
                </IconWrap>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/ziyodulloyevmuhriddin"
                rel="noreferrer"
              >
                <IconWrap>
                  <Icons.Instagram />
                </IconWrap>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com" rel="noreferrer">
                <IconWrap>
                  <Icons.Linkedin />
                </IconWrap>
              </a>
            </li>
          </ul>
        </Content>
        {FooterLinks.map(({ id, title, links }) => (
          <Content key={id}>
            <Content.Title>{title}</Content.Title>
            <ul className="footer__links">
              {links.map((item, index) => (
                <li key={index} className="footer__link">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </Content>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Why;
