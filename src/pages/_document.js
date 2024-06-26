import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="NoteSP" />
        <meta property="og:description" content="Spatial Notes, Made Easy." />
        <meta property="og:image" content="/notesp-logo.png" />
        {/* Enable Model Viewer */}
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
