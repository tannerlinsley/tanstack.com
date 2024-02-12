// import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
// import { Outlet, json, useLoaderData } from '@remix-run/react'
import { seo } from '~/utils/seo'
import { DocsLayout } from '~/components/DocsLayout'
import { QueryGGBanner } from '~/components/QueryGGBanner'
import {
  getBranch,
  colorFrom,
  colorTo,
  textColor,
  repo,
  latestVersion,
  availableVersions,
  frameworks,
} from '~/projects/query'
import { getTanstackDocsConfig } from '~/utils/config'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/query/$version/docs')({
  loader: async (context) => {
    const { version } = context.params
    const branch = getBranch(version)

    const config = await getTanstackDocsConfig(repo, branch)

    return {
      config,
      version,
    }
  },
  component: RouteFrameworkParam,
})

// export const meta: MetaFunction = () => {
//   return seo({
//     title:
//       'TanStack Query Docs | React Query, Solid Query, Svelte Query, Vue Query',
//   })
// }

export default function RouteFrameworkParam() {
  const { config, version } = Route.useLoaderData()

  return (
    <>
      <QueryGGBanner />
      <DocsLayout
        name="Query"
        version={version === 'latest' ? latestVersion : version!}
        colorFrom={colorFrom}
        colorTo={colorTo}
        textColor={textColor}
        config={config}
        frameworks={frameworks}
        availableVersions={availableVersions}
        repo={repo}
      >
        <Outlet />
      </DocsLayout>
    </>
  )
}
