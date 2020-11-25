import capitalize from 'capitalize';
import { toCamelCase } from '@caerusjs/helpers';
import { GetServerSideProps } from 'next';
import { componentList } from '../../organisms/list';
import * as Props from '../../server/componentProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return {
      props: {},
    };
  }

  const organismName = capitalize.words(params.slug).replace(/-/g, '');
  const propExport = `${toCamelCase(params.slug)}Props`;

  return {
    props: {
      organismName,
      propData: Props[propExport],
    },
  };
};

const Organism = ({
  organismName,
  propData,
}: {
  organismName: string;
  propData: unknown;
}) => {
  const OrganismComponent = componentList[organismName];

  return <OrganismComponent {...propData} />;
};

export default Organism;
