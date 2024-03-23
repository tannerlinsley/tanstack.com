import * as React from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { DocTitle } from '~/components/DocTitle'
import { repo, getBranch } from '~/projects/query'
import { seo } from '~/utils/seo'
import { capitalize, slugToTitle } from '~/utils/utils'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Route = createFileRoute(
  '/query/$version/docs/framework/$framework/examples/$'
)({
  meta: ({ params }) =>
    seo({
      title: `${capitalize(params.framework)} Query ${slugToTitle(
        params._splat
      )} Example | TanStack Query Docs`,
      description: `An example showing how to implement ${slugToTitle(
        params._splat
      )} in ${capitalize(params.framework)} Query`,
    }),
  component: Example,
})

export default function Example() {
  const { version, framework, _splat } = Route.useParams()
  const branch = getBranch(version)

  const examplePath = [framework, _splat].join('/')

  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const githubUrl = `https://github.com/${repo}/tree/${branch}/examples/${examplePath}`
  const stackBlitzUrl = `https://stackblitz.com/github/${repo}/tree/${branch}/examples/${examplePath}?embed=1&theme=${
    isDark ? 'dark' : 'light'
  }`
  const codesandboxUrl = `https://codesandbox.io/s/github/${repo}/tree/${branch}/examples/${examplePath}?embed=1&theme=${
    isDark ? 'dark' : 'light'
  }`

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-auto">
      <div className="p-4 lg:p-6">
        <DocTitle>
          <span>
            {capitalize(framework)} Example: {slugToTitle(_splat)}
          </span>
          <div className="flex items-center gap-4 flex-wrap font-normal text-xs">
            <a
              href={githubUrl}
              target="_blank"
              className="flex gap-1 items-center"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> Github
            </a>
            <a
              href={stackBlitzUrl}
              target="_blank"
              className="flex gap-1 items-center"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> StackBlitz
            </a>
            <a
              href={codesandboxUrl}
              target="_blank"
              className="flex gap-1 items-center"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> CodeSandbox
            </a>
          </div>
        </DocTitle>
      </div>
      <div className="flex-1 lg:px-6 flex flex-col min-h-0">
        <iframe
          src={stackBlitzUrl}
          title={`tanstack/query: ${examplePath}`}
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          className="flex-1 w-full overflow-hidden lg:rounded-lg shadow-xl shadow-gray-700/20 bg-white dark:bg-black"
        />
      </div>
      <div className="lg:h-16 lg:mt-2" />
    </div>
  )
}