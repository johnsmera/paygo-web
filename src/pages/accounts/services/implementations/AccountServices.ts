import {
  CreateInput,
  DeleteInput,
  GetInput,
  IAccountService,
  ListInput,
  UpdateInput,
} from '../IAccountServices'

class AccountServices implements IAccountService {
  create(input: CreateInput): boolean {
    throw new Error('Method not implemented.')
  }
  list(input: ListInput): boolean {
    throw new Error('Method not implemented.')
  }
  get(input: GetInput): boolean {
    throw new Error('Method not implemented.')
  }
  update(input: UpdateInput): boolean {
    throw new Error('Method not implemented.')
  }
  delete(input: DeleteInput): boolean {
    throw new Error('Method not implemented.')
  }
}
