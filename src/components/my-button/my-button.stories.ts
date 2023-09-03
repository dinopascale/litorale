import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';

import './my-button';

const meta: Meta = {
  title: 'Example/Boh',
  component: 'my-button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<my-button></my-button>`,
};
