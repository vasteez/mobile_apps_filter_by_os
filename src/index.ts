import testValues from "./data/mobile_apps_mockdata"
import { filterOutList, getTrueVersionNumber } from "./helpers/filter"

const rules = {
  default: {
    supportUpTo: {
      android: '7'
    },
    minimalSupport: {
      startRule: 'January 1, 2023',
      endOfLife: 'February 1, 2023'
    }
  }
}

console.log("Includes: ", 'Android: 7'.includes('Android: 7'))


function findAllDeprecatedDevices(rules: any, devices: any) {
  console.log("Initial Devices Length: ", devices.length)
  const androidSupportedUpTo = rules.default.supportUpTo.android

  // const filteredOutList: string[] = filterOutList(androidSupportedUpTo)

  const highestDeprecatedVersionNumber = getTrueVersionNumber(androidSupportedUpTo.split('.'))


  const fullySupported: any[] = []
  const minimallySupported: any[] = []
  const notSupported: any[] = []

  devices.forEach((device: any) => {
    const deviceVersionBreaks = device.device_os_version.split(':')[1].replace(' ', '').split('.')

    const trueVersionNumber = getTrueVersionNumber(deviceVersionBreaks)
    console.log("deviceVersionBreaks: ", trueVersionNumber, device.device_os_version)
    // console.log("Device Version: ", +deviceVersion)
    if (trueVersionNumber <= highestDeprecatedVersionNumber) {
      notSupported.push(device)
    } else {
      fullySupported.push(device)
    }
  })

  console.log("Fully Supported: ", fullySupported)
  console.log("Not Supported: ", notSupported)

  return devices.filter((device: any) => {
    if (!device.device_os_version.includes(androidSupportedUpTo)) return device
  })

}



const filteredDevices = findAllDeprecatedDevices(rules, testValues)

// console.log({ filteredDevices })
console.log("Post Devices Length: ", filteredDevices.length)