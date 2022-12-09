import mockMobileApps from "./data/mobile_apps_mockdata"
import mockRules from "./data/rules_mockdata"
import { getTrueVersionNumber } from "./helpers/filter"

function findAllDeprecatedDevices(rules: any, devices: any) {
  const highestDeprecatedVersionNumber = getTrueVersionNumber(rules.default.supportUpTo.android)
  const highestDeprecatedVersionNumberBuffer = getTrueVersionNumber(rules.default.minimalSupportBuffer.supportUpTo.android)


  const fullySupported: any[] = []
  const minimallySupported: any[] = []
  const notSupported: any[] = []

  devices.forEach((device: any) => {
    const trueVersionNumber = getTrueVersionNumber(device.device_os_version)

    if (trueVersionNumber <= highestDeprecatedVersionNumberBuffer)
      notSupported.push(device)
    else if (trueVersionNumber > highestDeprecatedVersionNumberBuffer && trueVersionNumber <= highestDeprecatedVersionNumber)
      minimallySupported.push(device)
    else
      fullySupported.push(device)

  })

  return { fullySupported, minimallySupported, notSupported }
}



const { fullySupported, minimallySupported, notSupported } = findAllDeprecatedDevices(mockRules, mockMobileApps)

console.log("Full Supported: ", fullySupported)
console.log("Min Supported: ", minimallySupported)
console.log("Not Supported: ", notSupported)