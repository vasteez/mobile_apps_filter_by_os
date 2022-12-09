// Generates a list starting from the supported up to number for example 9.1
// and generates an array of all version numbers below it so a list could look like
// [
// '9.3', '9.2', '9.1',
//   '9.0', '9.', '8.',
//   '7.', '6.', '5.',
//   '4.', '3.', '2.',
//   '1.', '0.'
// ]
export function filterOutList(supportedUpTo: any): string[] {
  let majorVersion: number = 0;
  let minorVersion: number = 0;
  const hasMinor = supportedUpTo.includes('.')
  const list: any[] = []

  if (!hasMinor)
    majorVersion = +supportedUpTo
  else {
    majorVersion = +supportedUpTo.split('.')[0]
    minorVersion = +supportedUpTo.split('.')[1]
  }

  if (hasMinor)
    for (let i = 0; i <= minorVersion; i++)
      list.push(+`${majorVersion}.${minorVersion - i}`)

  for (let i = 0; i <= majorVersion; i++)
    list.push(+`${majorVersion - i}`)

  console.log("Major Version: ", majorVersion)
  console.log("Minor Version: ", minorVersion)
  console.log("Filtered List: ", list)
  return list
}


// Gets true version number. For example if you have version
// 9.2.2 this will turn it into NUMBER 922
// 10.3.2 will be 1032
export function getTrueVersionNumber(deviceVersionBreaks: any) {
  let builtOut: number = 0;
  for (let i = 0; i < deviceVersionBreaks.length; i++) {
    if (i === 0)
      builtOut += deviceVersionBreaks[i] * 100
    else if (i === 1)
      builtOut += deviceVersionBreaks[i] * 10
    else if (i === 2)
      builtOut += deviceVersionBreaks[i] * 1
  }

  return builtOut
}