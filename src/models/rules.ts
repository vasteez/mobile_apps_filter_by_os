export interface Rules {
  default: {
    supportUpTo: {
      android: string,
      ios: string
    },
    minimalSupportBuffer: {
      supportUpTo: {
        android: string,
        ios: string
      },
      startRule: string,
      endOfLife: string
    }
  }
}