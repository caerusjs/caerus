import titleize from '../../../helpers/titleize'

export const createTest = (name: string) => {
  return (`test('get${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('get${titleize(name)}s', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('add${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('update${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})

test('remove${titleize(name)}', async () => {
  // Arrange

  // Act
  
  // Assert
})`)
}