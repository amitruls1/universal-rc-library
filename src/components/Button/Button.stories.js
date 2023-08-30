// src/components/Button/Button.stories.js
import React from 'react';
import Button from './';

export default {
  title: 'Components/Button',
  component: Button,
};

// Create stories
export const Default = () => <Button label="Click me" />;
export const WithCustomStyle = () => (
  <Button label="Styled Button" style={{ backgroundColor: 'red', color: 'white' }} />
);
