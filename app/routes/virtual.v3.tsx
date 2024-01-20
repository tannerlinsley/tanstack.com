import { Link, Outlet, useLocation, useSearchParams } from '@remix-run/react'
import { json } from '@remix-run/node'
import { DefaultErrorBoundary } from '~/components/DefaultErrorBoundary'
import { v3branch } from '~/projects/virtual'
import { getTanstackDocsConfig } from '~/utils/config'

export const loader = async () => {
  const repo = 'tanstack/virtual'

  const tanstackDocsConfig = await getTanstackDocsConfig(repo, v3branch)

  return json({
    tanstackDocsConfig,
  })
}

export type VirtualConfigLoaderData = typeof loader

export const ErrorBoundary = DefaultErrorBoundary

export default function RouteReactVirtual() {
  const [params] = useSearchParams()
  const location = useLocation()

  const show = params.get('from') === 'reactVirtualV2'
  const original = params.get('original')

  return (
    <>
      {show ? (
        <div className="p-4 bg-blue-500 text-white flex items-center justify-center gap-4">
          <div>
            Looking for the{' '}
            <a
              href={
                original ||
                'https://github.com/TanStack/virtual/tree/v2/docs/src/pages/docs'
              }
              className="font-bold underline"
            >
              React Virtual v2 documentation
            </a>
            ?
          </div>
          <Link
            to={location.pathname}
            replace
            className="bg-white text-black py-1 px-2 rounded-md uppercase font-black text-xs"
          >
            Hide
          </Link>
        </div>
      ) : null}
      <Outlet />
    </>
  )
}
