/** INTERFACES */
import type { IUserImage } from '@/ts/interfaces/UserImage'

export interface IUser {
  id: string
  name: string
  surname: string
  email: string
  phone: string
  about: string
  image: IUserImage
}
