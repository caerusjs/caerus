import childProcess from 'child_process'
// import fs from 'fs'

test('initializing a project', (done) => {
  childProcess.exec('yarn caerus init my-blog', (_, stdout) => {
    // Check we have the correct console message
    expect(stdout).toMatch(/.*Created folder.*\/client\/src\/atoms/)
    done()

    // Check our entity class name is correct
    // const contents = fs.readFileSync(`${process.cwd()}/server/src/entities/test.ts`, { encoding: 'utf8' })
    // expect(contents).toMatch(/.*export class Test/)
  })
})