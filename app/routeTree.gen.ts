/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SponsorsEmbedImport } from './routes/sponsors-embed'
import { Route as MerchImport } from './routes/merch'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as BlogImport } from './routes/blog'
import { Route as LibrariesImport } from './routes/_libraries'
import { Route as LibraryIdImport } from './routes/$libraryId'
import { Route as BlogIndexImport } from './routes/blog.index'
import { Route as LibrariesIndexImport } from './routes/_libraries.index'
import { Route as LibraryIdIndexImport } from './routes/$libraryId.index'
import { Route as BlogSplatImport } from './routes/blog.$'
import { Route as LibrariesSupportImport } from './routes/_libraries.support'
import { Route as LibrariesLearnImport } from './routes/_libraries.learn'
import { Route as LibrariesDedicatedSupportImport } from './routes/_libraries.dedicated-support'
import { Route as LibraryIdVersionImport } from './routes/$libraryId.$version'
import { Route as LibraryIdVersionDocsImport } from './routes/$libraryId.$version.docs'
import { Route as LibrariesVirtualVersionIndexImport } from './routes/_libraries.virtual.$version.index'
import { Route as LibrariesTableVersionIndexImport } from './routes/_libraries.table.$version.index'
import { Route as LibrariesStoreVersionIndexImport } from './routes/_libraries.store.$version.index'
import { Route as LibrariesStartVersionIndexImport } from './routes/_libraries.start.$version.index'
import { Route as LibrariesRouterVersionIndexImport } from './routes/_libraries.router.$version.index'
import { Route as LibrariesRangerVersionIndexImport } from './routes/_libraries.ranger.$version.index'
import { Route as LibrariesQueryVersionIndexImport } from './routes/_libraries.query.$version.index'
import { Route as LibrariesFormVersionIndexImport } from './routes/_libraries.form.$version.index'
import { Route as LibrariesConfigVersionIndexImport } from './routes/_libraries.config.$version.index'
import { Route as LibraryIdVersionDocsIndexImport } from './routes/$libraryId.$version.docs.index'
import { Route as LibraryIdVersionDocsSplatImport } from './routes/$libraryId.$version.docs.$'
import { Route as LibraryIdVersionDocsFrameworkFrameworkSplatImport } from './routes/$libraryId.$version.docs.framework.$framework.$'
import { Route as LibraryIdVersionDocsFrameworkFrameworkExamplesSplatImport } from './routes/$libraryId.$version.docs.framework.$framework.examples.$'

// Create/Update Routes

const SponsorsEmbedRoute = SponsorsEmbedImport.update({
  id: '/sponsors-embed',
  path: '/sponsors-embed',
  getParentRoute: () => rootRoute,
} as any)

const MerchRoute = MerchImport.update({
  id: '/merch',
  path: '/merch',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BlogRoute = BlogImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const LibrariesRoute = LibrariesImport.update({
  id: '/_libraries',
  getParentRoute: () => rootRoute,
} as any)

const LibraryIdRoute = LibraryIdImport.update({
  id: '/$libraryId',
  path: '/$libraryId',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => BlogRoute,
} as any)

const LibrariesIndexRoute = LibrariesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LibrariesRoute,
} as any)

const LibraryIdIndexRoute = LibraryIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LibraryIdRoute,
} as any)

const BlogSplatRoute = BlogSplatImport.update({
  id: '/$',
  path: '/$',
  getParentRoute: () => BlogRoute,
} as any)

const LibrariesSupportRoute = LibrariesSupportImport.update({
  id: '/support',
  path: '/support',
  getParentRoute: () => LibrariesRoute,
} as any)

const LibrariesLearnRoute = LibrariesLearnImport.update({
  id: '/learn',
  path: '/learn',
  getParentRoute: () => LibrariesRoute,
} as any)

const LibrariesDedicatedSupportRoute = LibrariesDedicatedSupportImport.update({
  id: '/dedicated-support',
  path: '/dedicated-support',
  getParentRoute: () => LibrariesRoute,
} as any)

const LibraryIdVersionRoute = LibraryIdVersionImport.update({
  id: '/$version',
  path: '/$version',
  getParentRoute: () => LibraryIdRoute,
} as any)

const LibraryIdVersionDocsRoute = LibraryIdVersionDocsImport.update({
  id: '/docs',
  path: '/docs',
  getParentRoute: () => LibraryIdVersionRoute,
} as any)

const LibrariesVirtualVersionIndexRoute =
  LibrariesVirtualVersionIndexImport.update({
    id: '/virtual/$version/',
    path: '/virtual/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibrariesTableVersionIndexRoute = LibrariesTableVersionIndexImport.update(
  {
    id: '/table/$version/',
    path: '/table/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesStoreVersionIndexRoute = LibrariesStoreVersionIndexImport.update(
  {
    id: '/store/$version/',
    path: '/store/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesStartVersionIndexRoute = LibrariesStartVersionIndexImport.update(
  {
    id: '/start/$version/',
    path: '/start/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesRouterVersionIndexRoute =
  LibrariesRouterVersionIndexImport.update({
    id: '/router/$version/',
    path: '/router/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibrariesRangerVersionIndexRoute =
  LibrariesRangerVersionIndexImport.update({
    id: '/ranger/$version/',
    path: '/ranger/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibrariesQueryVersionIndexRoute = LibrariesQueryVersionIndexImport.update(
  {
    id: '/query/$version/',
    path: '/query/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesFormVersionIndexRoute = LibrariesFormVersionIndexImport.update({
  id: '/form/$version/',
  path: '/form/$version/',
  getParentRoute: () => LibrariesRoute,
} as any)

const LibrariesConfigVersionIndexRoute =
  LibrariesConfigVersionIndexImport.update({
    id: '/config/$version/',
    path: '/config/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibraryIdVersionDocsIndexRoute = LibraryIdVersionDocsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LibraryIdVersionDocsRoute,
} as any)

const LibraryIdVersionDocsSplatRoute = LibraryIdVersionDocsSplatImport.update({
  id: '/$',
  path: '/$',
  getParentRoute: () => LibraryIdVersionDocsRoute,
} as any)

const LibraryIdVersionDocsFrameworkFrameworkSplatRoute =
  LibraryIdVersionDocsFrameworkFrameworkSplatImport.update({
    id: '/framework/$framework/$',
    path: '/framework/$framework/$',
    getParentRoute: () => LibraryIdVersionDocsRoute,
  } as any)

const LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute =
  LibraryIdVersionDocsFrameworkFrameworkExamplesSplatImport.update({
    id: '/framework/$framework/examples/$',
    path: '/framework/$framework/examples/$',
    getParentRoute: () => LibraryIdVersionDocsRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$libraryId': {
      id: '/$libraryId'
      path: '/$libraryId'
      fullPath: '/$libraryId'
      preLoaderRoute: typeof LibraryIdImport
      parentRoute: typeof rootRoute
    }
    '/_libraries': {
      id: '/_libraries'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LibrariesImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/merch': {
      id: '/merch'
      path: '/merch'
      fullPath: '/merch'
      preLoaderRoute: typeof MerchImport
      parentRoute: typeof rootRoute
    }
    '/sponsors-embed': {
      id: '/sponsors-embed'
      path: '/sponsors-embed'
      fullPath: '/sponsors-embed'
      preLoaderRoute: typeof SponsorsEmbedImport
      parentRoute: typeof rootRoute
    }
    '/$libraryId/$version': {
      id: '/$libraryId/$version'
      path: '/$version'
      fullPath: '/$libraryId/$version'
      preLoaderRoute: typeof LibraryIdVersionImport
      parentRoute: typeof LibraryIdImport
    }
    '/_libraries/dedicated-support': {
      id: '/_libraries/dedicated-support'
      path: '/dedicated-support'
      fullPath: '/dedicated-support'
      preLoaderRoute: typeof LibrariesDedicatedSupportImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/learn': {
      id: '/_libraries/learn'
      path: '/learn'
      fullPath: '/learn'
      preLoaderRoute: typeof LibrariesLearnImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/support': {
      id: '/_libraries/support'
      path: '/support'
      fullPath: '/support'
      preLoaderRoute: typeof LibrariesSupportImport
      parentRoute: typeof LibrariesImport
    }
    '/blog/$': {
      id: '/blog/$'
      path: '/$'
      fullPath: '/blog/$'
      preLoaderRoute: typeof BlogSplatImport
      parentRoute: typeof BlogImport
    }
    '/$libraryId/': {
      id: '/$libraryId/'
      path: '/'
      fullPath: '/$libraryId/'
      preLoaderRoute: typeof LibraryIdIndexImport
      parentRoute: typeof LibraryIdImport
    }
    '/_libraries/': {
      id: '/_libraries/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LibrariesIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/blog/': {
      id: '/blog/'
      path: '/'
      fullPath: '/blog/'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof BlogImport
    }
    '/$libraryId/$version/docs': {
      id: '/$libraryId/$version/docs'
      path: '/docs'
      fullPath: '/$libraryId/$version/docs'
      preLoaderRoute: typeof LibraryIdVersionDocsImport
      parentRoute: typeof LibraryIdVersionImport
    }
    '/$libraryId/$version/docs/$': {
      id: '/$libraryId/$version/docs/$'
      path: '/$'
      fullPath: '/$libraryId/$version/docs/$'
      preLoaderRoute: typeof LibraryIdVersionDocsSplatImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
    '/$libraryId/$version/docs/': {
      id: '/$libraryId/$version/docs/'
      path: '/'
      fullPath: '/$libraryId/$version/docs/'
      preLoaderRoute: typeof LibraryIdVersionDocsIndexImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
    '/_libraries/config/$version/': {
      id: '/_libraries/config/$version/'
      path: '/config/$version'
      fullPath: '/config/$version'
      preLoaderRoute: typeof LibrariesConfigVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/form/$version/': {
      id: '/_libraries/form/$version/'
      path: '/form/$version'
      fullPath: '/form/$version'
      preLoaderRoute: typeof LibrariesFormVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/query/$version/': {
      id: '/_libraries/query/$version/'
      path: '/query/$version'
      fullPath: '/query/$version'
      preLoaderRoute: typeof LibrariesQueryVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/ranger/$version/': {
      id: '/_libraries/ranger/$version/'
      path: '/ranger/$version'
      fullPath: '/ranger/$version'
      preLoaderRoute: typeof LibrariesRangerVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/router/$version/': {
      id: '/_libraries/router/$version/'
      path: '/router/$version'
      fullPath: '/router/$version'
      preLoaderRoute: typeof LibrariesRouterVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/start/$version/': {
      id: '/_libraries/start/$version/'
      path: '/start/$version'
      fullPath: '/start/$version'
      preLoaderRoute: typeof LibrariesStartVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/store/$version/': {
      id: '/_libraries/store/$version/'
      path: '/store/$version'
      fullPath: '/store/$version'
      preLoaderRoute: typeof LibrariesStoreVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/table/$version/': {
      id: '/_libraries/table/$version/'
      path: '/table/$version'
      fullPath: '/table/$version'
      preLoaderRoute: typeof LibrariesTableVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/virtual/$version/': {
      id: '/_libraries/virtual/$version/'
      path: '/virtual/$version'
      fullPath: '/virtual/$version'
      preLoaderRoute: typeof LibrariesVirtualVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/$libraryId/$version/docs/framework/$framework/$': {
      id: '/$libraryId/$version/docs/framework/$framework/$'
      path: '/framework/$framework/$'
      fullPath: '/$libraryId/$version/docs/framework/$framework/$'
      preLoaderRoute: typeof LibraryIdVersionDocsFrameworkFrameworkSplatImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
    '/$libraryId/$version/docs/framework/$framework/examples/$': {
      id: '/$libraryId/$version/docs/framework/$framework/examples/$'
      path: '/framework/$framework/examples/$'
      fullPath: '/$libraryId/$version/docs/framework/$framework/examples/$'
      preLoaderRoute: typeof LibraryIdVersionDocsFrameworkFrameworkExamplesSplatImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
  }
}

// Create and export the route tree

interface LibraryIdVersionDocsRouteChildren {
  LibraryIdVersionDocsSplatRoute: typeof LibraryIdVersionDocsSplatRoute
  LibraryIdVersionDocsIndexRoute: typeof LibraryIdVersionDocsIndexRoute
  LibraryIdVersionDocsFrameworkFrameworkSplatRoute: typeof LibraryIdVersionDocsFrameworkFrameworkSplatRoute
  LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute: typeof LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute
}

const LibraryIdVersionDocsRouteChildren: LibraryIdVersionDocsRouteChildren = {
  LibraryIdVersionDocsSplatRoute: LibraryIdVersionDocsSplatRoute,
  LibraryIdVersionDocsIndexRoute: LibraryIdVersionDocsIndexRoute,
  LibraryIdVersionDocsFrameworkFrameworkSplatRoute:
    LibraryIdVersionDocsFrameworkFrameworkSplatRoute,
  LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute:
    LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute,
}

const LibraryIdVersionDocsRouteWithChildren =
  LibraryIdVersionDocsRoute._addFileChildren(LibraryIdVersionDocsRouteChildren)

interface LibraryIdVersionRouteChildren {
  LibraryIdVersionDocsRoute: typeof LibraryIdVersionDocsRouteWithChildren
}

const LibraryIdVersionRouteChildren: LibraryIdVersionRouteChildren = {
  LibraryIdVersionDocsRoute: LibraryIdVersionDocsRouteWithChildren,
}

const LibraryIdVersionRouteWithChildren =
  LibraryIdVersionRoute._addFileChildren(LibraryIdVersionRouteChildren)

interface LibraryIdRouteChildren {
  LibraryIdVersionRoute: typeof LibraryIdVersionRouteWithChildren
  LibraryIdIndexRoute: typeof LibraryIdIndexRoute
}

const LibraryIdRouteChildren: LibraryIdRouteChildren = {
  LibraryIdVersionRoute: LibraryIdVersionRouteWithChildren,
  LibraryIdIndexRoute: LibraryIdIndexRoute,
}

const LibraryIdRouteWithChildren = LibraryIdRoute._addFileChildren(
  LibraryIdRouteChildren,
)

interface LibrariesRouteChildren {
  LibrariesDedicatedSupportRoute: typeof LibrariesDedicatedSupportRoute
  LibrariesLearnRoute: typeof LibrariesLearnRoute
  LibrariesSupportRoute: typeof LibrariesSupportRoute
  LibrariesIndexRoute: typeof LibrariesIndexRoute
  LibrariesConfigVersionIndexRoute: typeof LibrariesConfigVersionIndexRoute
  LibrariesFormVersionIndexRoute: typeof LibrariesFormVersionIndexRoute
  LibrariesQueryVersionIndexRoute: typeof LibrariesQueryVersionIndexRoute
  LibrariesRangerVersionIndexRoute: typeof LibrariesRangerVersionIndexRoute
  LibrariesRouterVersionIndexRoute: typeof LibrariesRouterVersionIndexRoute
  LibrariesStartVersionIndexRoute: typeof LibrariesStartVersionIndexRoute
  LibrariesStoreVersionIndexRoute: typeof LibrariesStoreVersionIndexRoute
  LibrariesTableVersionIndexRoute: typeof LibrariesTableVersionIndexRoute
  LibrariesVirtualVersionIndexRoute: typeof LibrariesVirtualVersionIndexRoute
}

const LibrariesRouteChildren: LibrariesRouteChildren = {
  LibrariesDedicatedSupportRoute: LibrariesDedicatedSupportRoute,
  LibrariesLearnRoute: LibrariesLearnRoute,
  LibrariesSupportRoute: LibrariesSupportRoute,
  LibrariesIndexRoute: LibrariesIndexRoute,
  LibrariesConfigVersionIndexRoute: LibrariesConfigVersionIndexRoute,
  LibrariesFormVersionIndexRoute: LibrariesFormVersionIndexRoute,
  LibrariesQueryVersionIndexRoute: LibrariesQueryVersionIndexRoute,
  LibrariesRangerVersionIndexRoute: LibrariesRangerVersionIndexRoute,
  LibrariesRouterVersionIndexRoute: LibrariesRouterVersionIndexRoute,
  LibrariesStartVersionIndexRoute: LibrariesStartVersionIndexRoute,
  LibrariesStoreVersionIndexRoute: LibrariesStoreVersionIndexRoute,
  LibrariesTableVersionIndexRoute: LibrariesTableVersionIndexRoute,
  LibrariesVirtualVersionIndexRoute: LibrariesVirtualVersionIndexRoute,
}

const LibrariesRouteWithChildren = LibrariesRoute._addFileChildren(
  LibrariesRouteChildren,
)

interface BlogRouteChildren {
  BlogSplatRoute: typeof BlogSplatRoute
  BlogIndexRoute: typeof BlogIndexRoute
}

const BlogRouteChildren: BlogRouteChildren = {
  BlogSplatRoute: BlogSplatRoute,
  BlogIndexRoute: BlogIndexRoute,
}

const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren)

export interface FileRoutesByFullPath {
  '/$libraryId': typeof LibraryIdRouteWithChildren
  '': typeof LibrariesRouteWithChildren
  '/blog': typeof BlogRouteWithChildren
  '/dashboard': typeof DashboardRoute
  '/login': typeof LoginRoute
  '/merch': typeof MerchRoute
  '/sponsors-embed': typeof SponsorsEmbedRoute
  '/$libraryId/$version': typeof LibraryIdVersionRouteWithChildren
  '/dedicated-support': typeof LibrariesDedicatedSupportRoute
  '/learn': typeof LibrariesLearnRoute
  '/support': typeof LibrariesSupportRoute
  '/blog/$': typeof BlogSplatRoute
  '/$libraryId/': typeof LibraryIdIndexRoute
  '/': typeof LibrariesIndexRoute
  '/blog/': typeof BlogIndexRoute
  '/$libraryId/$version/docs': typeof LibraryIdVersionDocsRouteWithChildren
  '/$libraryId/$version/docs/$': typeof LibraryIdVersionDocsSplatRoute
  '/$libraryId/$version/docs/': typeof LibraryIdVersionDocsIndexRoute
  '/config/$version': typeof LibrariesConfigVersionIndexRoute
  '/form/$version': typeof LibrariesFormVersionIndexRoute
  '/query/$version': typeof LibrariesQueryVersionIndexRoute
  '/ranger/$version': typeof LibrariesRangerVersionIndexRoute
  '/router/$version': typeof LibrariesRouterVersionIndexRoute
  '/start/$version': typeof LibrariesStartVersionIndexRoute
  '/store/$version': typeof LibrariesStoreVersionIndexRoute
  '/table/$version': typeof LibrariesTableVersionIndexRoute
  '/virtual/$version': typeof LibrariesVirtualVersionIndexRoute
  '/$libraryId/$version/docs/framework/$framework/$': typeof LibraryIdVersionDocsFrameworkFrameworkSplatRoute
  '/$libraryId/$version/docs/framework/$framework/examples/$': typeof LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute
}

export interface FileRoutesByTo {
  '/dashboard': typeof DashboardRoute
  '/login': typeof LoginRoute
  '/merch': typeof MerchRoute
  '/sponsors-embed': typeof SponsorsEmbedRoute
  '/$libraryId/$version': typeof LibraryIdVersionRouteWithChildren
  '/dedicated-support': typeof LibrariesDedicatedSupportRoute
  '/learn': typeof LibrariesLearnRoute
  '/support': typeof LibrariesSupportRoute
  '/blog/$': typeof BlogSplatRoute
  '/$libraryId': typeof LibraryIdIndexRoute
  '/': typeof LibrariesIndexRoute
  '/blog': typeof BlogIndexRoute
  '/$libraryId/$version/docs/$': typeof LibraryIdVersionDocsSplatRoute
  '/$libraryId/$version/docs': typeof LibraryIdVersionDocsIndexRoute
  '/config/$version': typeof LibrariesConfigVersionIndexRoute
  '/form/$version': typeof LibrariesFormVersionIndexRoute
  '/query/$version': typeof LibrariesQueryVersionIndexRoute
  '/ranger/$version': typeof LibrariesRangerVersionIndexRoute
  '/router/$version': typeof LibrariesRouterVersionIndexRoute
  '/start/$version': typeof LibrariesStartVersionIndexRoute
  '/store/$version': typeof LibrariesStoreVersionIndexRoute
  '/table/$version': typeof LibrariesTableVersionIndexRoute
  '/virtual/$version': typeof LibrariesVirtualVersionIndexRoute
  '/$libraryId/$version/docs/framework/$framework/$': typeof LibraryIdVersionDocsFrameworkFrameworkSplatRoute
  '/$libraryId/$version/docs/framework/$framework/examples/$': typeof LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/$libraryId': typeof LibraryIdRouteWithChildren
  '/_libraries': typeof LibrariesRouteWithChildren
  '/blog': typeof BlogRouteWithChildren
  '/dashboard': typeof DashboardRoute
  '/login': typeof LoginRoute
  '/merch': typeof MerchRoute
  '/sponsors-embed': typeof SponsorsEmbedRoute
  '/$libraryId/$version': typeof LibraryIdVersionRouteWithChildren
  '/_libraries/dedicated-support': typeof LibrariesDedicatedSupportRoute
  '/_libraries/learn': typeof LibrariesLearnRoute
  '/_libraries/support': typeof LibrariesSupportRoute
  '/blog/$': typeof BlogSplatRoute
  '/$libraryId/': typeof LibraryIdIndexRoute
  '/_libraries/': typeof LibrariesIndexRoute
  '/blog/': typeof BlogIndexRoute
  '/$libraryId/$version/docs': typeof LibraryIdVersionDocsRouteWithChildren
  '/$libraryId/$version/docs/$': typeof LibraryIdVersionDocsSplatRoute
  '/$libraryId/$version/docs/': typeof LibraryIdVersionDocsIndexRoute
  '/_libraries/config/$version/': typeof LibrariesConfigVersionIndexRoute
  '/_libraries/form/$version/': typeof LibrariesFormVersionIndexRoute
  '/_libraries/query/$version/': typeof LibrariesQueryVersionIndexRoute
  '/_libraries/ranger/$version/': typeof LibrariesRangerVersionIndexRoute
  '/_libraries/router/$version/': typeof LibrariesRouterVersionIndexRoute
  '/_libraries/start/$version/': typeof LibrariesStartVersionIndexRoute
  '/_libraries/store/$version/': typeof LibrariesStoreVersionIndexRoute
  '/_libraries/table/$version/': typeof LibrariesTableVersionIndexRoute
  '/_libraries/virtual/$version/': typeof LibrariesVirtualVersionIndexRoute
  '/$libraryId/$version/docs/framework/$framework/$': typeof LibraryIdVersionDocsFrameworkFrameworkSplatRoute
  '/$libraryId/$version/docs/framework/$framework/examples/$': typeof LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/$libraryId'
    | ''
    | '/blog'
    | '/dashboard'
    | '/login'
    | '/merch'
    | '/sponsors-embed'
    | '/$libraryId/$version'
    | '/dedicated-support'
    | '/learn'
    | '/support'
    | '/blog/$'
    | '/$libraryId/'
    | '/'
    | '/blog/'
    | '/$libraryId/$version/docs'
    | '/$libraryId/$version/docs/$'
    | '/$libraryId/$version/docs/'
    | '/config/$version'
    | '/form/$version'
    | '/query/$version'
    | '/ranger/$version'
    | '/router/$version'
    | '/start/$version'
    | '/store/$version'
    | '/table/$version'
    | '/virtual/$version'
    | '/$libraryId/$version/docs/framework/$framework/$'
    | '/$libraryId/$version/docs/framework/$framework/examples/$'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/dashboard'
    | '/login'
    | '/merch'
    | '/sponsors-embed'
    | '/$libraryId/$version'
    | '/dedicated-support'
    | '/learn'
    | '/support'
    | '/blog/$'
    | '/$libraryId'
    | '/'
    | '/blog'
    | '/$libraryId/$version/docs/$'
    | '/$libraryId/$version/docs'
    | '/config/$version'
    | '/form/$version'
    | '/query/$version'
    | '/ranger/$version'
    | '/router/$version'
    | '/start/$version'
    | '/store/$version'
    | '/table/$version'
    | '/virtual/$version'
    | '/$libraryId/$version/docs/framework/$framework/$'
    | '/$libraryId/$version/docs/framework/$framework/examples/$'
  id:
    | '__root__'
    | '/$libraryId'
    | '/_libraries'
    | '/blog'
    | '/dashboard'
    | '/login'
    | '/merch'
    | '/sponsors-embed'
    | '/$libraryId/$version'
    | '/_libraries/dedicated-support'
    | '/_libraries/learn'
    | '/_libraries/support'
    | '/blog/$'
    | '/$libraryId/'
    | '/_libraries/'
    | '/blog/'
    | '/$libraryId/$version/docs'
    | '/$libraryId/$version/docs/$'
    | '/$libraryId/$version/docs/'
    | '/_libraries/config/$version/'
    | '/_libraries/form/$version/'
    | '/_libraries/query/$version/'
    | '/_libraries/ranger/$version/'
    | '/_libraries/router/$version/'
    | '/_libraries/start/$version/'
    | '/_libraries/store/$version/'
    | '/_libraries/table/$version/'
    | '/_libraries/virtual/$version/'
    | '/$libraryId/$version/docs/framework/$framework/$'
    | '/$libraryId/$version/docs/framework/$framework/examples/$'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LibraryIdRoute: typeof LibraryIdRouteWithChildren
  LibrariesRoute: typeof LibrariesRouteWithChildren
  BlogRoute: typeof BlogRouteWithChildren
  DashboardRoute: typeof DashboardRoute
  LoginRoute: typeof LoginRoute
  MerchRoute: typeof MerchRoute
  SponsorsEmbedRoute: typeof SponsorsEmbedRoute
}

const rootRouteChildren: RootRouteChildren = {
  LibraryIdRoute: LibraryIdRouteWithChildren,
  LibrariesRoute: LibrariesRouteWithChildren,
  BlogRoute: BlogRouteWithChildren,
  DashboardRoute: DashboardRoute,
  LoginRoute: LoginRoute,
  MerchRoute: MerchRoute,
  SponsorsEmbedRoute: SponsorsEmbedRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$libraryId",
        "/_libraries",
        "/blog",
        "/dashboard",
        "/login",
        "/merch",
        "/sponsors-embed"
      ]
    },
    "/$libraryId": {
      "filePath": "$libraryId.tsx",
      "children": [
        "/$libraryId/$version",
        "/$libraryId/"
      ]
    },
    "/_libraries": {
      "filePath": "_libraries.tsx",
      "children": [
        "/_libraries/dedicated-support",
        "/_libraries/learn",
        "/_libraries/support",
        "/_libraries/",
        "/_libraries/config/$version/",
        "/_libraries/form/$version/",
        "/_libraries/query/$version/",
        "/_libraries/ranger/$version/",
        "/_libraries/router/$version/",
        "/_libraries/start/$version/",
        "/_libraries/store/$version/",
        "/_libraries/table/$version/",
        "/_libraries/virtual/$version/"
      ]
    },
    "/blog": {
      "filePath": "blog.tsx",
      "children": [
        "/blog/$",
        "/blog/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/merch": {
      "filePath": "merch.tsx"
    },
    "/sponsors-embed": {
      "filePath": "sponsors-embed.tsx"
    },
    "/$libraryId/$version": {
      "filePath": "$libraryId.$version.tsx",
      "parent": "/$libraryId",
      "children": [
        "/$libraryId/$version/docs"
      ]
    },
    "/_libraries/dedicated-support": {
      "filePath": "_libraries.dedicated-support.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/learn": {
      "filePath": "_libraries.learn.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/support": {
      "filePath": "_libraries.support.tsx",
      "parent": "/_libraries"
    },
    "/blog/$": {
      "filePath": "blog.$.tsx",
      "parent": "/blog"
    },
    "/$libraryId/": {
      "filePath": "$libraryId.index.tsx",
      "parent": "/$libraryId"
    },
    "/_libraries/": {
      "filePath": "_libraries.index.tsx",
      "parent": "/_libraries"
    },
    "/blog/": {
      "filePath": "blog.index.tsx",
      "parent": "/blog"
    },
    "/$libraryId/$version/docs": {
      "filePath": "$libraryId.$version.docs.tsx",
      "parent": "/$libraryId/$version",
      "children": [
        "/$libraryId/$version/docs/$",
        "/$libraryId/$version/docs/",
        "/$libraryId/$version/docs/framework/$framework/$",
        "/$libraryId/$version/docs/framework/$framework/examples/$"
      ]
    },
    "/$libraryId/$version/docs/$": {
      "filePath": "$libraryId.$version.docs.$.tsx",
      "parent": "/$libraryId/$version/docs"
    },
    "/$libraryId/$version/docs/": {
      "filePath": "$libraryId.$version.docs.index.tsx",
      "parent": "/$libraryId/$version/docs"
    },
    "/_libraries/config/$version/": {
      "filePath": "_libraries.config.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/form/$version/": {
      "filePath": "_libraries.form.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/query/$version/": {
      "filePath": "_libraries.query.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/ranger/$version/": {
      "filePath": "_libraries.ranger.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/router/$version/": {
      "filePath": "_libraries.router.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/start/$version/": {
      "filePath": "_libraries.start.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/store/$version/": {
      "filePath": "_libraries.store.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/table/$version/": {
      "filePath": "_libraries.table.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/_libraries/virtual/$version/": {
      "filePath": "_libraries.virtual.$version.index.tsx",
      "parent": "/_libraries"
    },
    "/$libraryId/$version/docs/framework/$framework/$": {
      "filePath": "$libraryId.$version.docs.framework.$framework.$.tsx",
      "parent": "/$libraryId/$version/docs"
    },
    "/$libraryId/$version/docs/framework/$framework/examples/$": {
      "filePath": "$libraryId.$version.docs.framework.$framework.examples.$.tsx",
      "parent": "/$libraryId/$version/docs"
    }
  }
}
ROUTE_MANIFEST_END */
