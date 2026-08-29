/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // تجاهل أخطاء ESLint أثناء الرفع
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تجاهل أخطاء TypeScript أثناء الرفع
    ignoreBuildErrors: true,
  },
};

export default nextConfig;