import type { ShortestConfig } from '@antiwork/shortest';

export default {
  headless: false,
  baseUrl: "https://github.com",
  testPattern: '__tests__/**/*.test.ts',
  ai: {
    provider: 'anthropic',
  },
} satisfies ShortestConfig;
