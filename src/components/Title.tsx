import { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color:white;
`
interface TitleProps {
  text:string;
}
 
const Title: FC<TitleProps> = (props: TitleProps) => {
  return <StyledTitle>{props.text}</StyledTitle>;
}
 
export default Title;
