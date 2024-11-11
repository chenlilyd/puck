module.exports = {
  reactStrictMode: false,
  transpilePackages: ["@measured/puck", "lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};
