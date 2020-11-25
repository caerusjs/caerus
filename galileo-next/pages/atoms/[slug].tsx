import capitalize from 'capitalize';
import { toCamelCase } from '@caerusjs/helpers';
import { GetServerSideProps } from 'next';
import { componentList } from '../../atoms/list';
import * as Props from '../../server/componentProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return {
      props: {},
    };
  }

  const atomName = capitalize.words(params.slug).replace(/-/g, '');
  const propExport = `${toCamelCase(params.slug)}Props`;

  return {
    props: {
      atomName,
      propData: Props[propExport],
    },
  };
};

const Atom = ({
  atomName,
  propData,
}: {
  atomName: string;
  propData: unknown;
}) => {
  const AtomComponent = componentList[atomName];

  return <AtomComponent {...propData} />;
};

export default Atom;
