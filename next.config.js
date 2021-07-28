module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    NEXT_PUBLIC_BASE_URL_POKEAPI: 'https://pokeapi.co/',
    NEXT_PUBLIC_BASE_URL_IP_API: 'https://ip-api.com/',
  }
}
