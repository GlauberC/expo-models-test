import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: "padding"
})`
  flex: 1;
  padding-top: 30px;
`;

export const Sep = styled.View`
  background: #cfcfcf;
  height: 1px;
  margin: 10px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #111111;
`;

export const User = styled.View`
  flex-direction: row;
  margin: 10px 10px 0 10px;
  align-items: center;
`;

export const DataUser = styled.View``;

export const NameUser = styled.Text`
  font-size: 16px;
  color: #111111;
`;
export const EmailUser = styled.Text`
  color: #333333;
  margin-top: 3px;
`;

export const BtnDel = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: #d9534f;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-right: 10px;
  elevation: 4;
`;

export const MiniSep = styled(Sep)`
  width: 100px;
  align-self: flex-start;
  margin-left: 10px;
  background: #efefef;
`;
