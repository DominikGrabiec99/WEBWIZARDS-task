/** INTERFACES */
import type { IUser } from '@/ts/interfaces/User'

export const useUserInformation = (user: Ref<IUser | null>) => {
  const userFullName = computed(() => `${user.value?.name || ''} ${user.value?.surname || ''}`)
  const userEmail = computed(() => user.value?.email || '')
  const userPhoneNumber = computed(() => user.value?.phone || '')
  const userAbout = computed(() => user.value?.about || '')
  const userImage = computed(() => {
    const { baseUrl, filename, extension } = user.value?.image || {}

    if (!baseUrl || !filename || !extension) {
      return ''
    }

    return `${baseUrl}${filename}.${extension}`
  })

  return {
    userFullName,
    userEmail,
    userPhoneNumber,
    userAbout,
    userImage
  }
}
