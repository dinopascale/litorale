import {Preview, setCustomElementsManifest} from '@storybook/web-components';
import customElements from '../custom-elements.json';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

setCustomElementsManifest(customElements);

export default preview;
