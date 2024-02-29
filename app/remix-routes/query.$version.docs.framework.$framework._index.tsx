import type { LoaderFunctionArgs } from '@remix-run/node'

export const loader = (context: LoaderFunctionArgs) => {
  throw redirect(
    context.request.url.replace(/\/docs.*/, '/docs/framework/react/overview')
  )
}
