import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin: 0 10px;
`;
export const Label = styled.Text`
  color: #111111;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#a0a0a0"
})`
  border-bottom-width: 1px;
  padding: 0 5px;
  font-size: 16px;
  color: #111111;
  margin-bottom: 20px;
`;
