import reactLogo from '~/images/react-logo.svg'
// import solidLogo from '~/images/solid-logo.svg'
// import vueLogo from '~/images/vue-logo.svg'

export const repo = 'tanstack/start'

export const latestBranch = 'main'
export const latestVersion = 'v0'
export const availableVersions = ['v0']

export const colorFrom = 'from-cyan-500'
export const colorTo = 'to-cyan-600'
export const textColor = 'text-cyan-600'

export const frameworks = {
  react: { label: 'React', logo: reactLogo, value: 'react' },
  // solid: { label: 'Solid', logo: solidLogo, value: 'solid' },
  // vue: { label: 'Vue', logo: vueLogo, value: 'vue' },
} as const

export type Framework = keyof typeof frameworks

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return ['latest', latestVersion].includes(version) ? latestBranch : version
}
