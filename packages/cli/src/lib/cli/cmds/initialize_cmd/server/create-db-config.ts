export const createDbConfig = (name: string) => {
  return `const path = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

  module.exports = {
    'type': 'sqlite',
    'url': process.env.DATABASE_URL,
    'ssl': process.env.NODE_ENV === 'production',
    'database': \`${name}_\${process.env.NODE_ENV}\`,
    'dropSchema': process.env.NODE_ENV === 'test',
    'synchronize': process.env.NODE_ENV === 'test',
    'logging': process.env.NODE_ENV === 'development' ? 'all' : ['error'],
    'entities': [
      \`\${path}/entities/*\`
    ],
    'migrations': [
      \`\${path}/db/migrations/*\`
    ],
    'subscribers': [
      \`\${path}/subscribers/*\`
    ],
    'cli': {
      'entitiesDir': \`\${path}/entities\`,
      'migrationsDir': \`\${path}/db/migrations\`,
      'subscribersDir': \`\${path}/db/subscribers\`
    }
  };
`;
};
