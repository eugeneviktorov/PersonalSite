import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Стилизация сайта и pwa */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Разработка организованных цифровых решений" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

        {/* Иконки сайта */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/svg" href="/favicons/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />

        {/* Данные при отправке ссылки на сайт */}
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Викторов" />
        <meta property="og:title" content="Разработка организованных цифровых решений" />
        <meta property="og:description" content="• Разработка • UI-Дизайн • Поддержка •" />
        <meta property="og:image" content="/favicons/favicon-512-512.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
