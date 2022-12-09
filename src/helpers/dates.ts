import { Rules } from "../models/rules";

export function isWithinMinimalSupportDateRange(rules: Rules, todaysDate: number) {
  if (rules.default?.minimalSupportBuffer?.startRule && rules.default?.minimalSupportBuffer?.endOfLife) {
    const startRuleDate = Date.parse(rules.default.minimalSupportBuffer.startRule)
    const endOfLifeDate = Date.parse(rules.default.minimalSupportBuffer.endOfLife)
    return startRuleDate <= todaysDate && todaysDate <= endOfLifeDate
  } else {
    return false
  }
}