import React from 'react';

import { Button } from '@strapi/design-system';

import { registerPreviewRoute } from './preview';

const config = {
  locales: ['it', 'es', 'en', 'en-GB'],
};
const bootstrap = (app) => {
  app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
    name: 'PreviewButton',
    Component: () => (
      <Button onClick={() => window.alert('Not here, The preview is.')}>Preview</Button>
    ),
  });

  const scriptEl = document.createElement('script');
  scriptEl.crossOrigin = '*';
  scriptEl.src = 'http://localhost:4173/mues-agent.min.js';
  scriptEl.src = "https://mues.ai/cdn/cursor/latest/mues-agent.min.js";
  scriptEl.dataset.cursorId = 'bd2b308c-be5b-48c7-a8aa-9dd789f1ccdb';
  scriptEl.dataset.workspaceId = '55beb392-ed5f-4c24-8d4a-5f23bc4fd56e';
  document.head.appendChild(scriptEl);

  // Check if Mues Agent is loaded
  console.log('Mues Agent script and styles were added to the page');

  // Add event listener to check when scripts are loaded
  scriptEl.onload = () => {
    console.log('Mues Agent script loaded successfully');

    // Check if Mues Agent injected anything into window object
    setTimeout(() => {
      console.log('Checking for Mues Agent on window object after 2 seconds');

      // Log all window properties that might be related to Mues
      const muesProperties = Object.keys(window).filter((key) =>
        key.toLowerCase().includes('mues')
      );

      if (muesProperties.length > 0) {
        console.log('Mues related properties found on window:', muesProperties);
      } else {
        console.log('No Mues related properties found on window');
      }

      // Check if there are any Mues elements in the DOM
      const muesElements = document.querySelectorAll('[class*="mues"], [id*="mues"]');
      console.log('Mues related DOM elements found:', muesElements.length);
    }, 2000);
  };

  scriptEl.onerror = (error) => {
    console.error('Mues Agent script failed to load:', error);
  };
};

export default {
  config,
  register: (app) => {
    registerPreviewRoute(app);
  },
  bootstrap,
};
