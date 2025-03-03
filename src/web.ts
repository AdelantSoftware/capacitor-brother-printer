import { WebPlugin } from '@capacitor/core';

import type { CapacitorBrotherPrinterPlugin } from './definitions';

export class CapacitorBrotherPrinterWeb extends WebPlugin implements CapacitorBrotherPrinterPlugin {
  async findNetworkPrinters(): Promise<{ printers: any[] }> {
    console.warn('findNetworkPrinters is not implemented on web');
    return { printers: [] };
  }

  async findBluetoothPrinters(): Promise<{ printers: any[] }> {
    console.warn('findBluetoothPrinters is not implemented on web');
    return { printers: [] };
  }

  async findPrinters(): Promise<{ printers: any[] }> {
    console.warn('findPrinters is not implemented on web');
    return { printers: [] };
  }

  async setPrinter(options: { printer: any }): Promise<{ success: boolean }> {
    console.warn('setPrinter is not implemented on web', options);
    return { success: false };
  }

  async printViaSDK(options: { data: string }): Promise<{ success: boolean }> {
    console.warn('printViaSDK is not implemented on web', options);
    return { success: false };
  }

  async sendUSBConfig(options: { data: string }): Promise<{ success: boolean }> {
    console.warn('sendUSBConfig is not implemented on web', options);
    return { success: false };
  }
}
