# mobile_apps_filter_by_os

Run script with

`npx ts-node src/index.ts`


-------

With rules like

```
{
  default: {
    supportUpTo: {
      android: '9.1.0',
      ios: '12'
    },
    minimalSupportBuffer: {
      supportUpTo: {
        android: '8.1.0',
        ios: '11'
      },
      startRule: 'December 1, 2022',
      endOfLife: 'February 1, 2023'
    }
  }
}
```

Running this script will get you an output like

```
Full Supported:  [
  { device_os_version: 'Android: 10.0' },
  { device_os_version: 'Android: 10.2' },
  { device_os_version: 'Android: 9.2' },
  { device_os_version: 'Android: 10' },
  { device_os_version: 'Android: 9.2.2' },
  { device_os_version: 'Android: 10.1' }
]
Min Supported:  [
  { device_os_version: 'Android: 9.0' },
  { device_os_version: 'Android: 9.1' },
  { device_os_version: 'Android: 9' },
  { device_os_version: 'Android: 8.2' }
]
Not Supported:  [
  { device_os_version: 'Android: 3.0' },
  { device_os_version: 'Android: 4' },
  { device_os_version: 'Android: 7' },
  { device_os_version: 'Android: 7.0.1' },
  { device_os_version: 'Android: 7.1.1' }
]
```