import mockRules from "../../src/data/rules_mockdata"
import { isWithinMinimalSupportDateRange } from '../../src/helpers/dates'

describe("isWithinMinimalSupportDateRange", () => {
  test("is now between two dates", () => {
    const withinMinimalSupport = isWithinMinimalSupportDateRange(mockRules, Date.parse('December 15, 2022'))
    expect(withinMinimalSupport).toBe(true)
  })
  test("is date before start date within minimal support", () => {
    const withinMinimalSupport = isWithinMinimalSupportDateRange(mockRules, Date.parse('November 1, 2022'))
    expect(withinMinimalSupport).toBe(false)
  })
  test("is date after end of life date within minimal support", () => {
    const withinMinimalSupport = isWithinMinimalSupportDateRange(mockRules, Date.parse('March 1, 2023'))
    expect(withinMinimalSupport).toBe(false)
  })
})
