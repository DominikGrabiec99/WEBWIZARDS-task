/** INTERFACES */
import type { IUser } from '@/ts/interfaces/User'

export const useUserData = () => {
  const { data: user, pending: fetchingUser, error: userError } = useFetch<IUser>('/api/user')

  const isUserError = computed(() => (!fetchingUser.value && !user) || userError.value)

  const userName = computed(() => user.value?.name)
  const userSurname = computed(() => user.value?.surname)
  const userEmail = computed(() => user.value?.email)
  const userPhone = computed(() => user.value?.phone)
  const userAbout = computed(() => user.value?.about)
  const userImage = computed(() => {
    const { baseUrl, filename, extension } = user.value?.image || {}

    return `${baseUrl}${filename}.${extension}`
  })

  return {
    user,
    isUserError,
    fetchingUser,
    userName,
    userSurname,
    userEmail,
    userPhone,
    userAbout,
    userImage
  }
}
