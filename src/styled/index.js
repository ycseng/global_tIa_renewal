import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FlexAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;ss
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FlexColumnAlign = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth && props.maxWidth + "px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundColor = styled.div`
  width: 100%;
  background-color: ${(props) => props.color && props.color};
  max-width: ${(props) => props.maxWidth && props.maxWidth + "px"};
  padding: ${(props) => props.padding && props.padding + "px"};
`;

export const Span = styled.span`
  color: ${(props) => props.color && props.color};
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`;

export const Img = styled.img`
  width: 100%;
  max-width: ${(props) => props.maxWidth && props.maxWidth + "px"};
  object-fit: cover;
`;

export const Alink = styled.a`
  font-size: ${(props) => props.fontSize && props.fontSize};
`;

export const LineBar = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 5px;
  margin: 0 auto;
  margin-bottom: 5vw;
  background-color: #fff;
`;
