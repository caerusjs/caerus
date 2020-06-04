import childProcess from 'child_process'
import fs from 'fs'

test('generating an entity', (done) => {
  childProcess.exec('yarn caerus g entity test', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created file.*\/server\/src\/entities\/test.ts/)
    done()
  })

  // Check out entity class name is correct
  const contents = fs.readFileSync(`${process.cwd()}/server/src/entities/test.ts`, { encoding: 'utf8' })
  expect(contents).toMatch(/.*export class Test/)
})
