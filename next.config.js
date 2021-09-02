const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
