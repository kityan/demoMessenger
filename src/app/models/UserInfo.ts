import { UserShortInfo } from './UserShortInfo'

export interface UserInfo extends UserShortInfo {
  info: string
  age: number
}
