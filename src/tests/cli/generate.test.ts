import childProcess from 'child_process'
import fs from 'fs'

test('generating an entity', (done) => {
  childProcess.exec('yarn caerus g entity test', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/entities\/test.ts/)
    done()

    // Check our entity class name is correct
    const contents = fs.readFileSync(`${process.cwd()}/server/src/entities/test.ts`, { encoding: 'utf8' })
    expect(contents).toMatch(/.*export class Test/)
  })
})

test('generating a resolver', (done) => {
  childProcess.exec('yarn caerus g resolver test', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.resolver.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.test.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.input.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.args.ts/)
    done()

    // Check our resolver class name is correct
    const resolverContents = fs.readFileSync(`${process.cwd()}/server/src/resolvers/test/test.resolver.ts`, { encoding: 'utf8' })
    expect(resolverContents).toMatch(/.*export class TestResolver/)

    const testContents = fs.readFileSync(`${process.cwd()}/server/src/resolvers/test/test.test.ts`, { encoding: 'utf8' })
    expect(testContents).toMatch(/.*test\('getTest', async \(\) => {/)

    const inputContents = fs.readFileSync(`${process.cwd()}/server/src/resolvers/test/test.input.ts`, { encoding: 'utf8' })
    expect(inputContents).toMatch(/.*export class AddTestInput implements Partial<Test>/)

    const argsContents = fs.readFileSync(`${process.cwd()}/server/src/resolvers/test/test.args.ts`, { encoding: 'utf8' })
    expect(argsContents).toMatch(/.*export class GetTestArgs {/)
  })
})

test('generating a view', (done) => {
  childProcess.exec('yarn caerus g views test', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/views\/test\/new.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/views\/test\/edit.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/views\/test\/show.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/views\/test\/index.tsx/)
    expect(stdout).toMatch(/.*Created file.*\/client\/src\/routes\/test.tsx/)
    done()

    // Check our view function name is correct
    const newContents = fs.readFileSync(`${process.cwd()}/client/src/views/test/new.tsx`, { encoding: 'utf8' })
    expect(newContents).toMatch(/.*const NewTestView/)

    const editContents = fs.readFileSync(`${process.cwd()}/client/src/views/test/edit.tsx`, { encoding: 'utf8' })
    expect(editContents).toMatch(/.*const EditTestView/)

    const showContents = fs.readFileSync(`${process.cwd()}/client/src/views/test/show.tsx`, { encoding: 'utf8' })
    expect(showContents).toMatch(/.*const ShowTest/)

    const indexContents = fs.readFileSync(`${process.cwd()}/client/src/views/test/index.tsx`, { encoding: 'utf8' })
    expect(indexContents).toMatch(/.*const IndexTestView/)

    const routeContents = fs.readFileSync(`${process.cwd()}/client/src/routes/test.tsx`, { encoding: 'utf8' })
    expect(routeContents).toMatch(/.*const TestRoutes/)
  })
})