const contentful = require('contentful-management')

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_KEY
})

export default (data) => {
  return client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID).then((space) => {
      return space.getEnvironment('master').then(async (environment) => {
        let fields = {}
        for (const current in data) {
          fields[current] = { 'pt-BR': data[current] }
        }
        const response = await environment.createEntry('empresarial', { fields })
        return response.fields ?? {}
      })
    })
}