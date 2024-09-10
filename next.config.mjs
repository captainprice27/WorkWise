// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack(config, { isServer }) {
//     // Add MiniCssExtractPlugin for extracting CSS
//     config.plugins.push(
//       new MiniCssExtractPlugin({
//         filename: isServer
//           ? '../.next/server/css/[name].css'
//           : 'static/css/[name].css',
//         chunkFilename: isServer
//           ? '../.next/server/css/[id].css'
//           : 'static/css/[id].css',
//       })
//     );

//     return config;
//   },
// };

// export default nextConfig;

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Add MiniCssExtractPlugin for extracting CSS
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: isServer
          ? '../.next/server/css/[name].css'
          : 'static/css/[name].css',
        chunkFilename: isServer
          ? '../.next/server/css/[id].css'
          : 'static/css/[id].css',
      })
    );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'workwise-s3.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;

