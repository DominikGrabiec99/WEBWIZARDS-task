const downloadJsonFile = (data: any, fileName: string) => {
  const userStr = JSON.stringify(data)
  const blob = new Blob([userStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default downloadJsonFile
