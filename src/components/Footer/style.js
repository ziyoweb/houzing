import styled from "styled-components";
import { ReactComponent as location } from "../../assets/icons/map.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as message } from "../../assets/icons/email.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twiter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";

const Wrapper = styled.div`
  background-color: var(--colorPrimary);
  padding: 48px 0 34px 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  margin: 0 auto;
  padding: 0 130px;
  max-width: 1460px;
  width: 100%;
  gap: 70px;
`;

const Content = styled.div`
  .footer__links {
    list-style-type: none;
  }

  .footer__link {
    margin-bottom: 20px;
  }

  .footer__link a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    text-decoration: none;
    display: flex;
  }

  .socials {
    display: flex;
    list-style-type: none;
    gap: 35px;
  }

  .socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    text-decoration: none;
    border-radius: 3px;
    transition: all 0.27s linear;
    background-color: rgba(255, 255, 255, 0.05);
  }
  .socials li:hover a {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

Content.Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

const IconWrap = styled.div``;

const Icons = styled.div``;

Icons.Location = styled(location)`
  width: 23px;
  display: block;
  padding-right: 2px;
  margin-right: 15px;
`;
Icons.Phone = styled(phone)`
  width: 23px;
  display: block;
  padding-right: 2px;

  margin-right: 15px;
  & path {
    fill: #fff;
  }
`;
Icons.Message = styled(message)`
  width: 23px;
  display: block;
  padding-right: 2px;

  margin-right: 15px;
`;

Icons.Facebook = styled(facebook)``;
Icons.Twitter = styled(twitter)``;
Icons.Instagram = styled(instagram)``;
Icons.Linkedin = styled(linkedin)``;

export { Wrapper, Container, Content, IconWrap, Icons };
