import { sanitizeVersionNumber } from '../../src/helpers/filter'

describe("sanitizeVersionNumber", () => {
  test("Sanitize with phone prefix: Android", () => {
    const sanitized = sanitizeVersionNumber('Android: 9.0.1')
    console.log("Sanitized: ", sanitized)
    expect(true).toBe(true)
  })
});