export interface CapacitorBrotherPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
