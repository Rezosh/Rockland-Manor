/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
})





