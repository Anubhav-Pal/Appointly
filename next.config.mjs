/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    return config;
  },
  // env: {
  //   // Public variables accessible in the client-side code
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  //   NEXT_PUBLIC_BUCKET_ID: process.env.NEXT_PUBLIC_BUCKET_ID,
  //   NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,

  //   // Private variables accessible only on the server-side
  //   DATABASE_ID: process.env.DATABASE_ID,
  //   PATIENT_COLLECTION_ID: process.env.PATIENT_COLLECTION_ID,
  //   PROJECT_ID: process.env.PROJECT_ID,
  //   DOCTOR_COLLECTION_ID: process.env.DOCTOR_COLLECTION_ID,
  //   APPOINTMENT_COLLECTION_ID: process.env.APPOINTMENT_COLLECTION_ID,
  //   API_KEY: process.env.API_KEY,
  // },
};

export default nextConfig;
