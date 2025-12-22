"use client"

import Script from "next/script"

export function Analytics() {
  return (
    <>
      <Script
        async
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-361NDWV31W"
      ></Script>
      <Script id="gtag">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-361NDWV31W');
`}
      </Script>
    </>
  )
}
