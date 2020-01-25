import React from "react";

import { Container, Label } from "./styles";

export default function Button({ children, onPress }) {
  return (
    <Container onPress={onPress}>
      <Label>{children}</Label>
    </Container>
  );
}
