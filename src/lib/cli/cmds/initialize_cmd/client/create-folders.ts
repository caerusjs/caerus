import { createFolder } from '../../../helpers/create-folder'

const folders = [
  '/client/src/atoms',
  '/client/src/molecules',
  '/client/src/organisms',
  '/client/src/public',
  '/client/src/routes',
  '/client/src/lib',
  '/client/src/styles',
  '/client/src/support',
  '/client/src/views',
  '/client/src/views/example',
  '/client/src/views/layouts'
]

export const createFolders = (name: string) => {
  folders.forEach(folder => {
    createFolder(`${name}${folder}`)
  })
}
