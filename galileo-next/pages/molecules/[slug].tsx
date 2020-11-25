import capitalize from 'capitalize';
import { toCamelCase } from '@caerusjs/helpers';
import { GetServerSideProps } from 'next';
import { componentList } from '../../molecules/list';
import * as Props from '../../server/componentProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return {
      props: {},
    };
  }

  const moleculeName = capitalize.words(params.slug).replace(/-/g, '');
  const propExport = `${toCamelCase(params.slug)}Props`;

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
  propData: unknown;
}) => {
  const MoleculeComponent = componentList[moleculeName];

  return <MoleculeComponent {...propData} />;
};

export default Molecule;
