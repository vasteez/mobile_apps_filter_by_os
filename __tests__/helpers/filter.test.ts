import { getTrueVersionNumber, sanitizeVersionNumber } from '../../src/helpers/filter'

describe("getTrueVersionNumber", () => {
  test("with one digit", () => {
    const trueVersion = getTrueVersionNumber('9')
    expect(trueVersion).toBe(900)
  })
  test("with two digits", () => {
    const trueVersion = getTrueVersionNumber('9.1')
    expect(trueVersion).toBe(910)
  })
  test("with three digits", () => {
    const trueVersion = getTrueVersionNumber('9.6.1')
    expect(trueVersion).toBe(961)
  })
  test("with four digits", () => {
    const trueVersion = getTrueVersionNumber('10.0.2.0')
    expect(trueVersion).toBe(1002)
  })
})

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