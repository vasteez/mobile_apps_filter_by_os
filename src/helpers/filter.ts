/**
 * Ex. Input: '9.2.2' -> Output: 922
 * Ex. Input: '10.3.2' -> Output: 1032
 */
export function getTrueVersionNumber(deviceOsVersion: string) {
  const sanitizedVersionNumber: string[] = sanitizeVersionNumber(deviceOsVersion)

  let trueVersion: number = 0;
  for (let i = 0; i < sanitizedVersionNumber.length; i++) {
    if (i === 0)
      trueVersion += +sanitizedVersionNumber[i] * 100
    else if (i === 1)
      trueVersion += +sanitizedVersionNumber[i] * 10
    else if (i === 2)
      trueVersion += +sanitizedVersionNumber[i] * 1
  }

  return trueVersion
}

/**
 * Sanitizes the version number. And turns it into an array
 *
 * Ex. Input: 'Android: 9.3' -> Output: ['9','3']
 */
export function sanitizeVersionNumber(rawVersionNumber: string): string[] {
  if (rawVersionNumber.includes(":"))
    return rawVersionNumber.split(':')[1].replace(' ', '').split('.')
  else
    return rawVersionNumber.split('.')
}