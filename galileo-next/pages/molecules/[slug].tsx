import capitalize from 'capitalize';
import { toCamelCase } from '@caerusjs/helpers';
import { GetServerSideProps } from 'next';
import { ComponentList } from '../../molecules/list';
import * as Props from '../../server/componentProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return {
      props: {},
    };
  }

  const moleculeName = capitalize
    .words(params.slug)
    .replace(/-/g, '') as keyof typeof ComponentList;
  const propExport = `${toCamelCase(params.slug)}Props` as keyof typeof Props;

  return {
    props: {
      moleculeName,
      propData: Props[propExport],
    },
  };
};

const Molecule = ({
  moleculeName,
  propData,
}: {
  moleculeName: string;
  propData: typeof Props;
}) => {
  const MoleculeComponent = ComponentList[moleculeName];

  return <MoleculeComponent {...propData} />;
};

export default Molecule;
