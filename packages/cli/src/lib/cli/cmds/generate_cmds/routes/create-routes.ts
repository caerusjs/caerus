import { toTitleCase } from '@caerusjs/client-helpers';

export const createRoutes = (name: string) => {
  return `import React, { lazy } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

const Show${toTitleCase(
    name,
  )}View = lazy(() => import('views/${name}/show.view'));
const Index${toTitleCase(
    name,
  )}View = lazy(() => import('views/${name}/index.view'));
const New${toTitleCase(
    name,
  )}View = lazy(() => import('views/${name}/new.view'));
const Edit${toTitleCase(
    name,
  )}View = lazy(() => import('views/${name}/edit.view'));

const ${toTitleCase(name)}Routes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route path='/${name}s/:${name}Id/edit' component={Edit${toTitleCase(
    name,
  )}View} />
      <Route path='/${name}s/new' component={New${toTitleCase(name)}View} />
      <Route path='/${name}s/:${name}Id' component={Show${toTitleCase(
    name,
  )}View} />
      <Route path='/${name}s/' component={Index${toTitleCase(name)}View} />
    </Switch>
  );
};

export default ${toTitleCase(name)}Routes`;
};
