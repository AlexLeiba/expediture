import React from 'react';
import { Container } from './Spacer.style';

export function Spacer({ children, margin }) {
  return <Container margin={margin}>{children}</Container>;
}
