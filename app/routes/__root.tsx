import {
  Outlet,
  ErrorRouteProps,
  rootRouteWithContext,
  useMatches,
  ErrorComponentProps,
} from '@tanstack/react-router'
import appCss from '~/styles/app.css?url'
import carbonStyles from '~/styles/carbon.css?url'
import prismThemeLight from '~/styles/prismThemeLight.css?url'
import prismThemeDark from '~/styles/prismThemeDark.css?url'
import docSearchStyles from '@docsearch/css/dist/style.css?url'
import { seo } from '~/utils/seo'
import ogImage from '~/images/og.png'
import {
  Meta,
  RouterManagedTag,
  Scripts,
} from '@tanstack/react-router-server/client'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'

export const Route = rootRouteWithContext<{
  assets: RouterManagedTag[]
}>()({
  component: RootComponent,
  // errorComponent: ErrorBoundary,
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    ...seo({
      title: 'TanStack | High Quality Open-Source Software for Web Developers',
      description: `Headless, type-safe, powerful utilities for complex workflows like Data Management, Data Visualization, Charts, Tables, and UI Components.`,
      image: ogImage,
      keywords:
        'tanstack,react,reactjs,react query,react table,open source,open source software,oss,software',
    }),
  ],
  links: () => [
    { rel: 'stylesheet', href: appCss },
    {
      rel: 'stylesheet',
      href: prismThemeLight,
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'stylesheet',
      href: prismThemeDark,
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'stylesheet',
      href: docSearchStyles,
    },
    {
      rel: 'stylesheet',
      href: carbonStyles,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
    { rel: 'icon', href: '/favicon.ico' },
  ],
  scripts: () => [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-JMT1Z50SPS',
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JMT1Z50SPS');
      `,
    },
  ],
})

export default function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

// function ErrorBoundary({ error }: ErrorComponentProps) {
//   // when true, this is what used to go to `CatchBoundary`
//   // if (isRouteErrorResponse(error)) {
//   //   return (
//   //     <RootDocument title={`${error.status} ${error.statusText}`}>
//   //       <div className="h-[50vh] flex flex-col items-center justify-center gap-6">
//   //         <DefaultCatchBoundary
//   //           status={error.status}
//   //           statusText={error.statusText}
//   //           data={error.data}
//   //           isRoot={true}
//   //         />
//   //       </div>
//   //     </RootDocument>
//   //   )
//   // }

//   console.error(error)

//   // Don't forget to typecheck with your own logic.
//   // Any value can be thrown, not just errors!
//   let errorMessage = 'Unknown error'
//   if (error instanceof Error) {
//     errorMessage = error.message
//   }

//   return (
//     <RootDocument title="Error!">
//       <div>
//         <h1>There was an error!</h1>
//         <p>{errorMessage}</p>
//       </div>
//     </RootDocument>
//   )
// }

function RootDocument({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const matches = useMatches()

  // const prefersDarkMode =
  //   typeof document !== 'undefined'
  //     ? matchMedia('(prefers-color-scheme: dark)').matches
  //     : false

  // const darkModeScript = (
  //   <script
  //     dangerouslySetInnerHTML={{
  //       __html: `
  //               try {
  //                 if (matchMedia("(prefers-color-scheme: dark)").matches) {
  //                   document.body.setAttribute("data-theme", "dark");
  //                 } else {
  //                   document.body.removeAttribute('data-theme');
  //                 }
  //               } catch (error) {}
  //             `,
  //     }}
  //   ></script>
  // )

  return (
    <html lang="en">
      <head>
        {matches.find((d) => d.staticData?.baseParent) ? (
          <base target="_parent" />
        ) : null}
        {title ? <title>{title}</title> : null}
        <Meta />
      </head>
      <body
      // {...(prefersDarkMode ? { 'data-theme': 'dark' } : {})}
      >
        <HydrationOverlay>
          {children}
          {/* {darkModeScript} */}
          <TanStackRouterDevtools />
          {/* // TODO:
        {/* <div
        className={`absolute top-2 left-1/2 -translate-1/2 p-2 bg-white dark:bg-gray-800
        rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-0 pointer-events-none
        z-30 delay-300 ${
          navigation.state !== 'idle' ? 'opacity-1' : 'opacity-0'
        }`}
        >
        <CgSpinner className="text-2xl animate-spin" />
      </div> */}
        </HydrationOverlay>
        <Scripts />
      </body>
    </html>
  )
}