import styled from "styled-components";
import { ReactComponent as sms } from "../assets/icons/chat.svg";
import { ReactComponent as house } from "../assets/icons/cardHouse.svg";
import { ReactComponent as phone } from "../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../assets/icons/cardMaps.svg";

const Icons = styled.div``;

Icons.Message = styled(sms)``;
Icons.House = styled(house)``;
Icons.Phone = styled(phone)``;
Icons.Maps = styled(maps)``;

export const WhyChoiceCardData = [
  {
    id: 1,
    icon: <Icons.Message />,
    title: "Trusted By Thousands",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
  {
    id: 2,
    icon: <Icons.House />,
    title: "Wide Renge Of Properties",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
  {
    id: 3,
    icon: <Icons.Phone />,
    title: "Financing Made Easy",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
  {
    id: 4,
    icon: <Icons.Maps />,
    title: "See Neighborhoods",
    text: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
  },
];

export const FooterLinks = [
  {
    id: 1,
    title: "Discover",
    links: ["Chicago", "Los Angeles", "Miami", "New York"],
  },
  {
    id: 2,
    title: "Lists by Category",
    links: ["Apartments", "Condos", "Houses", "Offices", "Retail", "Villas"],
  },
  {
    id: 3,
    title: "Lists by Category",
    links: ["About Us", "Terms & Conditions", "Support Center", "Contact Us"],
  },
];
