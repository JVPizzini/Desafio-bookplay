import Document, { Html, Head, Main, NextScript } from "next/document"

export default class BookplayDocs extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>

            <link rel="shortcut icon" href="https://bookplay.com.br/produto/1/icons/favicon-16x16.png" type="image/x-icon"/>

            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
          )
  }
}