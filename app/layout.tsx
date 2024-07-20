import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Связанные файлы и метаданные */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Разработка организованных цифровых решений" />

        {/* Стилизация для веб-сайта */}
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        {/* Иконки сайта */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-icon-180-180.png" />

        {/* Поделиться данными */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Викторов" />
        <meta property="og:title" content="Разработка организованных цифровых решений" />
        <meta property="og:description" content="• Разработка • UI-Дизайн • Поддержка •" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/favicons/favicon-512-512.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
