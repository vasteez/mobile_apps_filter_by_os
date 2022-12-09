import mockMobileApps from "./data/mobile_apps_mockdata"
import mockRules from "./data/rules_mockdata"
import { getTrueVersionNumber } from "./helpers/filter"

function findAllDeprecatedDevices(rules: any, devices: any) {
  console.log("Initial Devices Length: ", devices.length)
  console.log("Rules: ", rules)

  const highestDeprecatedVersionNumber = getTrueVersionNumber(rules.default.supportUpTo.android)


  const fullySupported: any[] = []
  const minimallySupported: any[] = []
  const notSupported: any[] = []

  devices.forEach((device: any) => {

    const trueVersionNumber = getTrueVersionNumber(device.device_os_version)
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

  // return devices.filter((device: any) => {
  //   if (!device.device_os_version.includes(androidSupportedUpTo)) return device
  // })

}



const filteredDevices = findAllDeprecatedDevices(mockRules, mockMobileApps)

// console.log({ filteredDevices })
// console.log("Post Devices Length: ", filteredDevices.length)