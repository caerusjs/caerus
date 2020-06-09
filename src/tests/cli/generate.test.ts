import childProcess from 'child_process'
import fs from 'fs'

test('generating an entity', (done) => {
  childProcess.exec('yarn caerus g entity test', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/entities\/test.ts/)
    done()

    // Check out entity class name is correct
    const contents = fs.readFileSync(`${process.cwd()}/server/src/entities/test.ts`, { encoding: 'utf8' })
    expect(contents).toMatch(/.*export class Test/)
  })
})

test('generating a resource', (done) => {
  childProcess.exec('yarn caerus g resolver test', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.resolver.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.test.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.input.ts/)
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/resolvers\/test\/test.args.ts/)
    done()

    // Check out entity class name is correct
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
