import localFont from "next/font/local"

export const geist = localFont({
  src: [
    {
      path: "../public/brand/Geist-Regular-BF6569491e3eff1.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/brand/Geist-Medium-BF6569491e1c281.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/brand/Geist-SemiBold-BF6569491e8c368.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/brand/Geist-Bold-BF6569491da5a14.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/brand/Geist-Black-BF6569491cec591.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist",
})

export const poppins = localFont({
  src: [
    {
      path: "../public/brand/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/brand/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/brand/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/brand/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/brand/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
})

