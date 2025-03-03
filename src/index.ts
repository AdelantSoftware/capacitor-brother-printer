import { registerPlugin } from '@capacitor/core';

import { IOS_PAPER_LABEL_MAP, CapacitorBrotherPrinterPlugin } from './definitions';

const CapacitorBrotherPrinter = registerPlugin<CapacitorBrotherPrinterPlugin>('CapacitorBrotherPrinter', {
  web: () => import('./web').then((m) => new m.CapacitorBrotherPrinterWeb()),
});

export * from './definitions';
export { CapacitorBrotherPrinter };

// Helper function to handle iOS-specific paper label names
export function adaptPrinterConfigForPlatform(printer: any): any {
  if (
    // Capacitor provides a different way to check platform
    (window as any)?.Capacitor?.getPlatform() === 'ios' &&
    printer.paperLabelName &&
    printer.paperLabelName.startsWith('W')
  ) {
    const iosLabelName = IOS_PAPER_LABEL_MAP[printer.paperLabelName];
    if (iosLabelName) {
      printer = {
        ...printer,
        paperLabelName: iosLabelName,
      };
    }
  }
  return printer;
}

// Extended API with convenience methods that mirror the original Cordova API
export default class CapacitorBrotherPrinterAPI {
  static async findNetworkPrinters(): Promise<any[]> {
    const result = await CapacitorBrotherPrinter.findNetworkPrinters();
    return result.printers;
  }

  static async findBluetoothPrinters(): Promise<any[]> {
    const result = await CapacitorBrotherPrinter.findBluetoothPrinters();
    return result.printers;
  }

  static async findPrinters(): Promise<any[]> {
    const result = await CapacitorBrotherPrinter.findPrinters();
    return result.printers;
  }

  static async setPrinter(printer: any): Promise<boolean> {
    const adaptedPrinter = adaptPrinterConfigForPlatform(printer);
    const result = await CapacitorBrotherPrinter.setPrinter({ printer: adaptedPrinter });
    return result.success;
  }

  static async printViaSDK(data: string): Promise<boolean> {
    if (!data || data.length === 0) {
      console.log('No data passed in. Expects a bitmap.');
      return false;
    }
    const result = await CapacitorBrotherPrinter.printViaSDK({ data });
    return result.success;
  }

  static async sendUSBConfig(data: string): Promise<boolean> {
    if (!data || data.length === 0) {
      console.log('No data passed in. Expects print payload string.');
      return false;
    }
    const result = await CapacitorBrotherPrinter.sendUSBConfig({ data });
    return result.success;
  }
}
