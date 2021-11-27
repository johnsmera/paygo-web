export type CreateInput = {
  name: string
  amount: number
  userId: string
}

export type ListInput = {
  userId: string
}

export type GetInput = {
  accountId: string
}

export type UpdateInput = {
  accountId: string

  set: {
    name: string
    amount: number
  }
}

export type DeleteInput = {
  accountId: string
}

export interface IAccountService {
  create(input: CreateInput): boolean
  list(input: ListInput): boolean
  get(input: GetInput): boolean
  update(input: UpdateInput): boolean
  delete(input: DeleteInput): boolean
}
