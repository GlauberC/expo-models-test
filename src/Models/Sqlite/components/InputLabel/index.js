import React from "react";
import { View } from "react-native";

import { Container, Label, Input } from "./styles";

export default function InputLabel({ label, onChange, value, placeholder }) {
  return (
    <Container>
      <Label>{label}:</Label>
      <Input onChangeText={onChange} value={value} placeholder={placeholder} />
    </Container>
  );
}
