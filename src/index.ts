import mockMobileApps from "./data/mobile_apps_grouped_mockdata"
import mockRules from "./data/rules_mockdata"
import { isWithinMinimalSupportDateRange } from "./helpers/dates"
import { getTrueVersionNumber } from "./helpers/filter"
import { Rules } from "./models/rules"

function findAllDeprecatedDevices(rules: Rules, devices: any) {
  const withinMinimalSupport = isWithinMinimalSupportDateRange(rules, Date.now())

  const highestDeprecatedVersionNumber = getTrueVersionNumber(rules.default.supportUpTo.android)
  const highestDeprecatedVersionNumberBuffer = getTrueVersionNumber(rules.default.minimalSupportBuffer.supportUpTo.android)


  const fullySupported: any[] = []
  const minimallySupported: any[] = []
  const notSupported: any[] = []

  devices.forEach((device: any) => {
    const trueVersionNumber = getTrueVersionNumber(device.device_os_version)

    if (trueVersionNumber <= highestDeprecatedVersionNumberBuffer)
      notSupported.push(device)
    else if ((trueVersionNumber > highestDeprecatedVersionNumberBuffer && trueVersionNumber <= highestDeprecatedVersionNumber) && withinMinimalSupport) {
      minimallySupported.push(device)
    } else
      fullySupported.push(device)

  })

  return { fullySupported, minimallySupported, notSupported }
}

console.time('Benchmark Test');


const { fullySupported, minimallySupported, notSupported } = findAllDeprecatedDevices(mockRules, mockMobileApps)

console.log("Full Supported: ", fullySupported)
console.log("Min Supported: ", minimallySupported)
console.log("Not Supported: ", notSupported)
console.timeEnd('Benchmark Test');