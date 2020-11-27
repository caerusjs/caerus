import capitalize from 'capitalize';
import { toCamelCase } from '@caerusjs/client-helpers';
import { GetServerSideProps } from 'next';
import { ComponentList } from '../../atoms/list';
import * as Props from '../../server/componentProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return {
      props: {},
    };
  }

  const atomName = capitalize.words(params.slug).replace(/-/g, '');
  const propExport = `${toCamelCase(params.slug)}Props` as keyof typeof Props;

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
  propData: typeof Props;
}) => {
  const AtomComponent = ComponentList[atomName];

  return <AtomComponent {...propData} />;
};

export default Atom;
