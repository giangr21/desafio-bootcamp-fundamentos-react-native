import styled from 'styled-components/native';

export const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ProductImage = styled.Image`
  height: 350px;
  width: 90%;
  align-self: center;
  padding: 20px 20px;
  margin-bottom: 5px;
`;
export const ProductTitle = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #26a69a;
  margin-bottom: 15px;
`;
export const ProductDescription = styled.Text`
  font-size: 14px;
  color: black;
  margin-bottom: 15px;
  padding: 20px 20px;
`;
export const ProductPrice = styled.Text`
  right: 25%;
  font-weight: bold;
  font-size: 20px;
  color: #26a69a;
`;
