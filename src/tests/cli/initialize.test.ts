import childProcess from 'child_process'
import { folders } from '../../lib/cli/cmds/initialize_cmd/client/create-client-folders'
import { folders as serversideFolders } from '../../lib/cli/cmds/initialize_cmd/server/create-server-folders'
// import fs from 'fs'

test('initializing a project', (done) => {
  childProcess.exec('yarn caerus init my-blog', (_, stdout) => {
    // Root
    expect(stdout).toMatch(/.*Created file.*\/.gitignore/)
    expect(stdout).toMatch(/.*Created file.*\/package.json/)
    expect(stdout).toMatch(/.*Created file.*\/codegen.yml/)
    expect(stdout).toMatch(/.*Created file.*\/Procfile.dev/)

    // Clientside
    folders.forEach(folder => {
      const matcher = new RegExp(`.*Created folder.*${folder}`);
      expect(stdout).toMatch(matcher)
    })

    // - root
    expect(stdout).toMatch(/.*Created file.*\/client\/package.json/)
    expect(stdout).toMatch(/.*Created file.*\/client\/tsconfig.json/)
    expect(stdout).toMatch(/.*Created file.*\/client\/.env/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/index.tsx/)

    // - lib
    expect(stdout).toMatch(/.*Created file.*\/client\/lib\/clone-without-typename.ts/)

    // - public
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/public\/index.html/)

    // - support
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/support\/setupTests.ts/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/support\/jest.config.js/)

    // - routes
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/routes\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/routes\/example.routes.tsx/)

    // - views
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/views\/example\/index.view.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/views\/layouts\/application.layout.tsx/)

    // - atoms
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/atoms\/p\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/atoms\/p\/p.module.css/)

    // - molecules
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/loading\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/loading\/loading.module.css/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/error\/error.module.css/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/error\/index.tsx/)

    // - organisms
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/organisms\/example\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/organisms\/example\/use-get-example.ts/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/organisms\/example\/get-example.graphql/)

    // Serverside
    serversideFolders.forEach(folder => {
      const matcher = new RegExp(`.*Created folder.*${folder}`);
      expect(stdout).toMatch(matcher)
    })
    done()

    // - root
    expect(stdout).toMatch(/.*Created file.*\/server\/ormconfig.js/)
    expect(stdout).toMatch(/.*Created file.*\/server\/nodemon.json/)

    // - config
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/apollo.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/assets.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/cors.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/index.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/routes.ts/)

    // - db
  })
})