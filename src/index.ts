import { registerPlugin } from '@capacitor/core';

import type { CapacitorBrotherPrinterPlugin } from './definitions';

const CapacitorBrotherPrinter = registerPlugin<CapacitorBrotherPrinterPlugin>('CapacitorBrotherPrinter', {
  web: () => import('./web').then((m) => new m.CapacitorBrotherPrinterWeb()),
});

export * from './definitions';
export { CapacitorBrotherPrinter };
