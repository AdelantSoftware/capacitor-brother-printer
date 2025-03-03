import { WebPlugin } from '@capacitor/core';

import type { CapacitorBrotherPrinterPlugin } from './definitions';

export class CapacitorBrotherPrinterWeb extends WebPlugin implements CapacitorBrotherPrinterPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
