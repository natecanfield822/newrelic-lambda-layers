// eslint-disable-next-line no-unused-vars
export async function handler(event, context) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "statusCode": 200,
        "body": `response body ${event.key}`
      })
    }, 100)
  })
}
