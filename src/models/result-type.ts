export type Results<T> = {
  isLoading?: boolean,
  error?: boolean
  success?: boolean
  data?: T
  errorMessage?: string
}

export type PostResult = {
  isLoading: boolean,
  success?: boolean,
  error?: boolean,
  errorMessage?: string,
}
