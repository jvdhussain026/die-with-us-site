export const appConfig = {
  // App Info
  appName: "Die With Us",
  tagline: "A calm, anonymous chat for low-battery moments",
  latestVersion: "7.0.0",
  releaseStatus: "First Public Release",
  
  // URLs
  androidDownloadUrl: "https://leqs6a0n9utb3ghn.public.blob.vercel-storage.com/app/Die%20With%20Us.apk",
  websiteUrl: "https://diewithme.shapemysite.in",
  
  // Support
  supportEmail: "diewithus.team@gmail.com",
  
  // Features
  adsEnabled: false,
  
  // Team
  team: {
    javed: {
      name: "Javed",
      url: "https://iamjaved.site/",
    },
    members: [
      "Bleh",
      "Mr.Oreo",
      "Astra1han",
    ],
  },
  
  // Battery Animation
  batteryAnimation: {
    minLevel: 1,
    maxLevel: 20,
    duration: 10, // seconds for full cycle
  },
  
  // Navigation
  navLinks: {
    home: "/",
    privacy: "/privacy-policy",
    terms: "/terms-of-service",
  },
} as const;

export type AppConfig = typeof appConfig;
