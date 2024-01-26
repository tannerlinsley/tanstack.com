import { Outlet, json, redirect, useLoaderData } from '@remix-run/react'
import { DefaultErrorBoundary } from '~/components/DefaultErrorBoundary'
import { availableVersions, latestVersion } from '~/projects/ranger'
import { useClientOnlyRender } from '~/utils/useClientOnlyRender'
import { RedirectVersionBanner } from '~/components/RedirectVersionBanner'
import type { LoaderFunctionArgs } from '@remix-run/node'

export const loader = async (context: LoaderFunctionArgs) => {
  const { version } = context.params

  const redirectUrl = context.request.url.replace(version!, 'latest')

  if (!availableVersions.concat('latest').includes(version!)) {
    throw redirect(redirectUrl)
  }

  return json({
    version,
    redirectUrl,
  })
}

export const ErrorBoundary = DefaultErrorBoundary

export default function RouteReactRouter() {
  const { version, redirectUrl } = useLoaderData<typeof loader>()

  if (!useClientOnlyRender()) {
    return null
  }

  return (
    <>
      <RedirectVersionBanner
        version={version!}
        latestVersion={latestVersion}
        redirectUrl={redirectUrl}
      />
      <Outlet />
    </>
  )
}
