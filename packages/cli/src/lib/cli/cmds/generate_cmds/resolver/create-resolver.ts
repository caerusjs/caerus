import { toTitleCase } from '@caerusjs/client-helpers';
import { toCamelCase } from '@caerusjs/client-helpers';

export const createResolver = (name: string) => {
  return `import {
  Args,
  Arg,
  Resolver,
  Mutation,
  Query,
} from 'type-graphql';
import { getRepository } from 'typeorm';

import { ${toTitleCase(name)} } from 'entities/${name}.entity';
import { Get${toTitleCase(name)}Args } from 'resolvers/${name}/${name}.args';
import { Add${toTitleCase(name)}Input, Update${toTitleCase(
    name,
  )}Input, Remove${toTitleCase(
    name,
  )}Input } from 'resolvers/${name}/${name}.input';

@Resolver(${toTitleCase(name)})
export class ${toTitleCase(name)}Resolver {
  @Query(returns => ${toTitleCase(name)})
  async get${toTitleCase(name)}(@Args() { id }: Get${toTitleCase(
    name,
  )}Args): Promise<${toTitleCase(name)} | undefined> {
    return getRepository(${toTitleCase(name)})
      .createQueryBuilder('${name}')
      .where('${name}.id = :id', { id: id })
      .getOne();
  };

  @Query(returns => [${toTitleCase(name)}])
  async get${toTitleCase(name)}s(): Promise<${toTitleCase(name)}[]> {
    return getRepository(${toTitleCase(name)})
      .createQueryBuilder('${name}')
      .orderBy({
        '${name}.createdAt': 'DESC',
      })
      .getMany();
  };
  
  @Mutation(returns => ${toTitleCase(name)})
  async add${toTitleCase(name)}(@Arg('${toCamelCase(name)}') ${toCamelCase(
    name,
  )}: Add${toTitleCase(name)}Input): Promise<${toTitleCase(name)} | undefined> {
    return getRepository(${toTitleCase(name)})
      .save(${name});
  };
  
  @Mutation(returns => ${toTitleCase(name)})
  async update${toTitleCase(name)}(@Arg('${toCamelCase(name)}') ${toCamelCase(
    name,
  )}: Update${toTitleCase(name)}Input): Promise<${toTitleCase(
    name,
  )} | undefined> {
    return getRepository(${toTitleCase(name)})
      .save(${name});
  }


  @Mutation(returns => ${toTitleCase(name)})
  async remove${toTitleCase(name)}(@Arg('${toCamelCase(
    name,
  )}') { id }: Remove${toTitleCase(name)}Input): Promise<Partial<${toTitleCase(
    name,
  )}>> {
    await getRepository(${toTitleCase(name)})
      .createQueryBuilder()
      .delete()
      .from(${toTitleCase(name)})
      .where('id = :id', { id: id })
      .execute();

    return { id };
  }
}`;
};
