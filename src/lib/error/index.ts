import { ErrorTypes } from '../../models/error'

export class AdessoError extends Error {
  readonly type: ErrorTypes

  constructor(message?: string, type: ErrorTypes = ErrorTypes.UNSPECIFIED) {
    super(message)
    this.name = new.target.name
    this.type = type
  }
}
