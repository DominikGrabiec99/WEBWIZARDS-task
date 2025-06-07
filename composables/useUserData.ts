/** INTERFACES */
import type { IUser } from '@/ts/interfaces/User'

export const useUserData = () => {
  const {
    data: user,
    pending: fetchingUser,
    error: userError
  } = useFetch<IUser>('/api/user', {
    method: 'POST'
  })

  const isUserError = computed(() => (!fetchingUser.value && !user) || userError.value)

  return {
    isUserError,
    fetchingUser,
    user
  }
}
