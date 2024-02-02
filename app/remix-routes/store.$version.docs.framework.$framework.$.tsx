import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { repo, getBranch } from '~/projects/store'
import { DefaultErrorBoundary } from '~/components/DefaultErrorBoundary'
import { seo } from '~/utils/seo'
import { useLoaderData, useParams } from '@remix-run/react'
import { Doc } from '~/components/Doc'
import { loadDocs } from '~/utils/docs'

export const loader = async (context: LoaderFunctionArgs) => {
  const { '*': docsPath, framework, version } = context.params
  const { url } = context.request

  return loadDocs({
    repo,
    branch: getBranch(version),
    docPath: `docs/framework/${framework}/${docsPath}`,
    currentPath: url,
    redirectPath: url.replace(`/docs/framework/${framework}/`, '/docs/'),
  })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return seo({
    title: `${data?.title} | TanStack Store Docs`,
    description: data?.description,
  })
}

export default function RouteDocs() {
  const { title, content, filePath } = useLoaderData<typeof loader>()
  const { version } = useParams()
  const branch = getBranch(version)

  return (
    <Doc
      title={title}
      content={content}
      repo={repo}
      branch={branch}
      filePath={filePath}
    />
  )
}
