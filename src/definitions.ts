export interface CapacitorBrotherPrinterPlugin {
  findNetworkPrinters(): Promise<{ printers: any[] }>;
  findBluetoothPrinters(): Promise<{ printers: any[] }>;
  findPrinters(): Promise<{ printers: any[] }>;
  setPrinter(options: { printer: any }): Promise<{ success: boolean }>;
  printViaSDK(options: { data: string }): Promise<{ success: boolean }>;
  sendUSBConfig(options: { data: string }): Promise<{ success: boolean }>;
}
// iOS paper label mapping
export const IOS_PAPER_LABEL_MAP: Record<string, string> = {
  W12: '12mm',
  W29: '29mm',
  W38: '38mm',
  W50: '50mm',
  W54: '54mm',
  W62: '62mm',
  W102: '102mm',
  W103: '103mm',
  W62RB: '62mmRB',
  W17H54: '17mmx54mm',
  W17H87: '17mmx87mm',
  W23H23: '23mmx23mm',
  W29H42: '29mmx42mm',
  W29H90: '29mmx90mm',
  W38H90: '38mmx90mm',
  W39H48: '39mmx48mm',
  W52H29: '52mmx29mm',
  W54H29: '54mmx29mm',
  W60H86: '60mmx86mm',
  W62H29: '62mmx29mm',
  W62H100: '62mmx100mm',
  W102H51: '102mmx51mm',
  W102H152: '102mmx152mm',
  W103H164: '103mmx164mm',
};
