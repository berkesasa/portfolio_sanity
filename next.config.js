/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    distDir: 'build',
    images: {
        domains: ['cdn.sanity.io'],
    },
    // exportPathMap: function () {
    //     return {
    //         '/': { page: '/welcome' }, // Başlangıç sayfanızı varsayılan olarak ayarlayın
    //         '/home': { page: '/home' }, // Ana sayfanız
    //     };
    // },
}

module.exports = nextConfig
