export const ErrorTypes = {
  NOT_FOUND: 'NOT_FOUND',
  UNSPECIFIED: 'UNSPECIFIED',
} as const

export type ErrorTypes = typeof ErrorTypes[keyof typeof ErrorTypes]
