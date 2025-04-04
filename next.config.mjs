/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'seif' https://paimondrivewaitlist.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
