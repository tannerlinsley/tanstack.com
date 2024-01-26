import type { LoaderFunctionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { DocsLayout } from '~/components/DocsLayout'
import {
  availableVersions,
  createLogo,
  getBranch,
  repo,
  useFormDocsConfig,
} from '~/projects/form'
import { getTanstackDocsConfig } from '~/utils/config'

export const loader = async (context: LoaderFunctionArgs) => {
  const { version } = context.params
  const branch = getBranch(version)

  if (!availableVersions.concat('latest').includes(version!)) {
    throw redirect(context.request.url.replace(version!, 'latest'))
  }

  const tanstackDocsConfig = await getTanstackDocsConfig(repo, branch)

  return json({
    tanstackDocsConfig,
    version,
  })
}

export default function Component() {
  const { version, tanstackDocsConfig } = useLoaderData<typeof loader>()
  let config = useFormDocsConfig(tanstackDocsConfig)
  return (
    <DocsLayout
      logo={createLogo(version)}
      colorFrom={'from-rose-500'}
      colorTo={'to-violet-500'}
      textColor={'text-violet-500'}
      config={config}
    >
      <Outlet />
    </DocsLayout>
  )
}
