import capitalize from 'capitalize';
import { toCamelCase } from '@caerusjs/client-helpers';
import { GetServerSideProps } from 'next';
import { ComponentList } from '../../organisms/list';
import * as Props from '../../server/componentProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return {
      props: {},
    };
  }

  const organismName = capitalize
    .words(params.slug)
    .replace(/-/g, '') as keyof typeof ComponentList;
  const propExport = `${toCamelCase(params.slug)}Props` as keyof typeof Props;

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
  propData: typeof Props;
}) => {
  const OrganismComponent = ComponentList[organismName];

  return <OrganismComponent {...propData} />;
};

export default Organism;
