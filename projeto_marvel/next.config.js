/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [
            'http://i.annihil.us'
        ],

        remotePatterns: [
            {

                protocol: 'http',
                hostname: 'i.annihil.us',
                port: '',
                pathname: '/**',
            },
        ],
    },

}


module.exports = nextConfig