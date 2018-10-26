import { padding, transitions } from 'polished';
import { ButtonHTMLAttributes, ClassAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import styled from '../../styled-components';
import Theme, { borderRadius, scale, transitionDuration } from '../../Theme';
import Text from '../Text';

interface Props {
  large?: boolean;
}

export const Button = styled(Text)<Props>`
  background: ${props => props.theme.primary};
  border: none;
  border-radius: ${borderRadius};
  color: white;
  font-size: ${scale(0)};
  ${padding(scale(-1), scale(2))};
  ${transitions(['opacity', 'background'], transitionDuration)};
  user-select: none;
  ${props =>
    props.large &&
    `
      font-size: ${scale(1)};
    `};

  &:focus,
  &:hover {
    background: ${props => props.theme.primaryDark};
    box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.05);
  }

  &:active {
    background: ${props => props.theme.primaryDarker};
  }
` as StyledComponentClass<
  ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement> &
    Props,
  Theme
>;

Button.defaultProps = { as: 'button', type: 'button' };

export default Button;
