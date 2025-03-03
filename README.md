# capacitor-brother-printer

print through brother sdk

## Install

```bash
npm install capacitor-brother-printer
npx cap sync
```

## API

<docgen-index>

* [`findNetworkPrinters()`](#findnetworkprinters)
* [`findBluetoothPrinters()`](#findbluetoothprinters)
* [`findPrinters()`](#findprinters)
* [`setPrinter(...)`](#setprinter)
* [`printViaSDK(...)`](#printviasdk)
* [`sendUSBConfig(...)`](#sendusbconfig)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### findNetworkPrinters()

```typescript
findNetworkPrinters() => Promise<{ printers: any[]; }>
```

**Returns:** <code>Promise&lt;{ printers: any[]; }&gt;</code>

--------------------


### findBluetoothPrinters()

```typescript
findBluetoothPrinters() => Promise<{ printers: any[]; }>
```

**Returns:** <code>Promise&lt;{ printers: any[]; }&gt;</code>

--------------------


### findPrinters()

```typescript
findPrinters() => Promise<{ printers: any[]; }>
```

**Returns:** <code>Promise&lt;{ printers: any[]; }&gt;</code>

--------------------


### setPrinter(...)

```typescript
setPrinter(options: { printer: any; }) => Promise<{ success: boolean; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ printer: any; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### printViaSDK(...)

```typescript
printViaSDK(options: { data: string; }) => Promise<{ success: boolean; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### sendUSBConfig(...)

```typescript
sendUSBConfig(options: { data: string; }) => Promise<{ success: boolean; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------

</docgen-api>
