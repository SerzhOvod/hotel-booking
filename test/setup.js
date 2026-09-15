import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Clean up the DOM after every test to prevent memory leaks or crossover state
afterEach(() => {
  cleanup();
});
