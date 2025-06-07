export default defineEventHandler(async event => {
  try {
    const config = useRuntimeConfig()
    const response = await fetch(`${config.webwizardApi}/user`)
    if (!response.ok) {
      throw new Error('Fetch failed')
    }

    const userData = await response.json()
    return userData.data
  } catch (error) {
    console.error('fetch user error: ', error)
    return createError({ statusCode: 500, statusMessage: 'Fetch failed' })
  }
})
