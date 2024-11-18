/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Desabilita a otimização automática de imagens
  }
};

export default nextConfig;