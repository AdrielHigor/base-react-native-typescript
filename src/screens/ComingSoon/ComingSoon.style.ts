import styled from 'styled-components/native';

import * as Window from '../../services/dimensions';

import { colors, fonts } from '../../config/theme.json';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${Window.fontScale(16)}px;
  color: ${colors.default_text_dark};
  font-family: ${fonts.regular};
`;