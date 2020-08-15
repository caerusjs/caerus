import childProcess from 'child_process'

test('initializing a project', (done) => {
  childProcess.exec('yarn caerus init my-blog', (_, stdout) => {
    // Root
    expect(stdout).toMatch(/.*Created file.*\/.gitignore/)
    expect(stdout).toMatch(/.*Created file.*\/package.json/)
    expect(stdout).toMatch(/.*Created file.*\/codegen.yml/)
    expect(stdout).toMatch(/.*Created file.*\/Procfile.dev/)

    // - root
    expect(stdout).toMatch(/.*Created file.*\/client\/package.json/)
    expect(stdout).toMatch(/.*Created file.*\/client\/tsconfig.json/)
    expect(stdout).toMatch(/.*Created file.*\/client\/.env/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/index.tsx/)

    // - lib
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/lib\/clone-without-typename.ts/)

    // - public
    expect(stdout).toMatch(/.*Created file.*\/client\/public\/index.html/)

    // - support
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/support\/setupTests.ts/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/support\/jest.config.js/)

    // - props
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/types\/props.ts/)

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
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/link\/link.module.css/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/link\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/molecules\/resource-form\/index.tsx/)

    // - organisms
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/organisms\/example\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/organisms\/example\/use-get-example.ts/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/organisms\/example\/get-example.graphql/)

    // - root
    expect(stdout).toMatch(/.*Created file.*\/server\/ormconfig.js/)
    expect(stdout).toMatch(/.*Created file.*\/server\/nodemon.json/)
    expect(stdout).toMatch(/.*Created file.*\/server\/package.json/)
    expect(stdout).toMatch(/.*Created file.*\/server\/tsconfig.json/)
    expect(stdout).toMatch(/.*Created file.*\/server\/tsconfig.prod.json/)
    expect(stdout).toMatch(/.*Created file.*\/server\/.env/)

    // - src
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/server.ts/)

    // - config
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/apollo.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/assets.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/cors.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/index.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/config\/routes.ts/)

    // - db
    expect(stdout).toMatch(/.*Created file.*\/server\/db\/seeds.ts/)

    // - entities
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/entities\/example.entity.ts/)

    // - resolvers
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/example\/example.resolver.ts/)

    // - support
    expect(stdout).toMatch(/.*Created file.*\/server\/support\/database.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/support\/jest\/jest.config.js/)
    expect(stdout).toMatch(/.*Created file.*\/server\/support\/jest\/jest.integration.config.js/)
    expect(stdout).toMatch(/.*Created file.*\/server\/support\/puppeteer\/puppeteer.config.js/)
    
    done()
  })
})