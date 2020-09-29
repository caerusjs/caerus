import { Resolver, Query } from 'type-graphql';

import { Atom } from 'entities/atom.entity';

@Resolver(Atom)
export class AtomResolver {
  @Query((returns) => Atom)
  async getAtom(): Promise<Atom> {
    return {
      href: 'hello',
    };
  }
}
