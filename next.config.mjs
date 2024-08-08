// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


export default {
    reactStrictMode: true,
    swcMinify: true, // Enable SWC minification
    webpack(config) {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/@ant-design\/icons/,
      });
      return config;
    },
  };