import { seo } from '~/utils/seo'
import { createFileRoute } from '@tanstack/react-router'
import { Doc } from '~/components/Doc'
import { loadDocs } from '~/utils/docs'
import { repo, getBranch } from '~/projects/form'

export const Route = createFileRoute(
  '/form/$version/docs/framework/$framework/$'
)({
  loader: (ctx) => {
    const { _splat: docsPath, framework, version } = ctx.params

    return loadDocs({
      repo,
      branch: getBranch(version),
      docsPath: `docs/framework/${framework}/${docsPath}`,
      currentPath: ctx.location.pathname,
      redirectPath: `/form/${version}/docs/overview`,
    })
  },
  meta: ({ loaderData }) =>
    seo({
      title: `${loaderData?.title} | TanStack Form Docs`,
      description: loaderData?.description,
    }),
  component: Docs,
})

function Docs() {
  const { title, content, filePath } = Route.useLoaderData()
  const { version } = Route.useParams()
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
