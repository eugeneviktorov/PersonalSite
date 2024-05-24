import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Иконки сайта */}
        <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/favicon-192x192.png" />

        <link rel="apple-touch-icon" href="icons/apple-icon-192x192png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/apple-icon-192x192png" />

        <meta name="msapplication-TileImage" content="/icons/ms-icon-70x70.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-150x150.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-270x270.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
        
        {/* Мобильная стилизация */}
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Share данные */}
        <meta property="og:site_name" content="Викторов" />
        <meta property="og:title" content="Разработка организованных цифровых решений" />
        <meta property="og:description" content="• Разработка • UI-Дизайн • Поддержка •" />
        <meta property="og:url" content="https://viktorovvv.ru" />
        <meta property="og:image" content="https://viktorovvv.ru/icons/logo-512x512.png" />
        <meta property="og:image:width" content="968" />
        <meta property="og:image:height" content="504" />
      </head>
      <body>{children}</body>
    </html>
  );
}
