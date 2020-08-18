import titleize from '../../../helpers/titleize'

export const createTest = (name: string) => {
  return (`test('get${titleize(name)}', async () => {
  // Arrange
  const ${name} = await create(${titleize(name)})

  // Act
  const res = await query({
    query: Get${titleize(name)}Document, 
    variables: { 
      id: ${name}.id
    } 
  })
  const get${titleize(name)}: IGet${titleize(name)}Query['get${titleize(name)}'] = res.data?.get${titleize(name)}

  // Assert
  expect(get${titleize(name)}).toHaveProperty('id', ${name}.id)
})

test('get${titleize(name)}s', async () => {
  // Arrange
  const quantity = 2
  const ${name}s = await create(${titleize(name)}, { quantity })

  // Act
  const res = await query({
    query: Get${titleize(name)}sDocument
  })
  const get${titleize(name)}s: IGet${titleize(name)}sQuery['get${titleize(name)}s'] = res.data?.get${titleize(name)}s

  // Assert
  expect(get${titleize(name)}s).toHaveLength(2)
})

test('add${titleize(name)}', async () => {
  // Act
  const res = await mutate({ 
    mutation: Add${titleize(name)}Document, 
    variables: {
      ${name}: {
        // Your variables here
      }
    } 
  })

  const add${titleize(name)}: IAdd${titleize(name)}Mutation['add${titleize(name)}'] = res.data?.add${titleize(name)}

  // Assert
  expect(add${titleize(name)}).toHaveProperty('variable', 'value')
})

test('update${titleize(name)}', async () => {
  // Arrange
  const ${name} = await create(${titleize(name)})

  // Act
  const res = await mutate({ 
    mutation: Update${titleize(name)}Document, 
    variables: { 
      ${titleize(name)}: {
        id: ${name}.id,
        // Your variables here
      }
    } 
  })

  const update${titleize(name)}: IUpdate${titleize(name)}Mutation['update${titleize(name)}'] = res.data?.update${titleize(name)}

  // Assert
  expect(update${titleize(name)}).toHaveProperty('variable', 'value')
})

test('remove${titleize(name)}', async () => {
  // Arrange
  const ${name} = await create(${titleize(name)})

  // Act
  const res = await mutate({ 
    mutation: Remove${titleize(name)}Document, 
    variables: { 
      ${name}: {
        id: ${name}.id
      }
    } 
  })

  const removeVideo: I${titleize(name)}VideoMutation['remove${titleize(name)}'] = res.data?.remove${titleize(name)}

  // Assert
  expect(remove${titleize(name)}).toHaveProperty('id', ${name}.id)
})`)
}