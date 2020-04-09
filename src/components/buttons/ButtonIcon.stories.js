import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';

storiesOf('ButtonIcon', module)
  .add('Default', () => <ButtonIcon />)
  .add('Cart', () => <ButtonIcon cart />)
  .add('Whishlist', () => <ButtonIcon whishlist />);
