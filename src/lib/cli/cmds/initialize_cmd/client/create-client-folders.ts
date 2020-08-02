import { createFolder } from '../../../helpers/create-folder'

export const folders = [
  '/client/src/atoms',
  '/client/src/molecules',
  '/client/src/organisms',
  '/client/public',
  '/client/src/routes',
  '/client/src/lib',
  '/client/src/styles',
  '/client/src/support',
  '/client/src/views',
  '/client/src/views/example',
  '/client/src/views/layouts'
]

export const createClientFolders = (name: string) => {
  folders.forEach(folder => {
    createFolder(`${name}${folder}`)
  })
}
