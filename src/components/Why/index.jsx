import React from "react";
import { Card, Wrapper, Container, Content, IconWrap } from "./style";
import { WhyChoiceCardData } from "../../mock";

export const Why = () => {
  return (
    <Wrapper>
      <Container>
        <div className="title">Recommended</div>
        <div className="describleText">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
        <Content>
          {WhyChoiceCardData.map(({ id, icon, title, text }) => (
            <Card key={id}>
              <IconWrap>{icon}</IconWrap>
              <h3 className="subtitle center">{title}</h3>
              <p className="info center">{text}</p>
            </Card>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Why;
