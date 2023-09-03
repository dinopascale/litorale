import {describe, beforeEach, it, expect} from 'vitest';

import './my-element';

describe('Button with increment', async () => {
  function getInsideButton(): HTMLElement | null | undefined {
    return document.body
      .querySelector('my-button')
      ?.shadowRoot?.querySelector('button');
  }

  beforeEach(async () => {
    document.body.innerHTML = '<my-button></my-button>';
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (getInsideButton()) {
          clearInterval(interval);
          resolve();
        }
      });
    });
  });

  it('should increment the count on each click', () => {
    getInsideButton()?.click;
    expect(getInsideButton()?.textContent).toContain('1');
  });
});
