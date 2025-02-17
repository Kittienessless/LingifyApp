import React  from "react";
import styled from 'styled-components'
type Props = {
  className?: string;
  children?: React.ReactNode;
 }
const Container = styled.div`
 display: flex;
  align-items: center;
`
const Border = styled.div`
 border-bottom: 1px solid black;
  width: 100%;
`

const Content = styled.span`
  padding: 0 10px 0 10px;
`




export const Divider = ({ children, className,  ...restTooltipProps } : Props) => {
  return (
    <Container    {...restTooltipProps}>
      <Border />
        <Content >
          {children}
        </Content>
      <Border  />
    </Container>
  );
};