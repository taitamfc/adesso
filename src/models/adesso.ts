import { AdessoError } from '../lib/error'

export type AdessoResultLoading = {
  isLoading: true
  data: undefined
  error: undefined
}

export type AdessoResultSuccess<T> = {
  isLoading: false
  data: T
  error: undefined
}

export type AdessoResultError = {
  isLoading: false
  data: undefined
  error: AdessoError
}

export type AdessoResult<T> = AdessoResultLoading | AdessoResultSuccess<T> | AdessoResultError
