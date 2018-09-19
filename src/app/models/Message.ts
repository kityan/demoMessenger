export interface UserMessage {
  id: string
  dt: Date,
  text: string,
  seen?: boolean,
  /** True if the message is from the remote user, False if it's to the remote user */
  isFrom: boolean
}
