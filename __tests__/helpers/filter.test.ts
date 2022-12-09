import { sanitizeVersionNumber } from '../../src/helpers/filter'

describe("sanitizeVersionNumber", () => {
  test("Sanitize with phone prefix: Android", () => {
    const sanitized = sanitizeVersionNumber('Android: 9.0.1')
    expect(sanitized.length).toBe(3)
    expect(sanitized).toStrictEqual(['9', '0', '1'])

    const sanitized2 = sanitizeVersionNumber('android: 9.0.1')
    expect(sanitized2.length).toBe(3)
    expect(sanitized2).toStrictEqual(['9', '0', '1'])
  })
  test("Sanitize with phone prefix: iOS", () => {
    const sanitized = sanitizeVersionNumber('iOS: 9.0.1')
    expect(sanitized.length).toBe(3)
    expect(sanitized).toStrictEqual(['9', '0', '1'])

    const sanitized2 = sanitizeVersionNumber('ios: 9.0.1')
    expect(sanitized2.length).toBe(3)
    expect(sanitized2).toStrictEqual(['9', '0', '1'])
  })
  test("Sanitize just the number", () => {
    const sanitized = sanitizeVersionNumber('9')
    expect(sanitized.length).toBe(1)
    expect(sanitized).toStrictEqual(['9'])
  })
  test("Sanitize just the number with major version", () => {
    const sanitized = sanitizeVersionNumber('9.0')
    expect(sanitized.length).toBe(2)
    expect(sanitized).toStrictEqual(['9', '0'])
  })
});