import capitalize from 'capitalize';
import { GetServerSideProps } from 'next';
import { componentList } from '../../atoms/list';
// import NullAtom from '../../atoms/null';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const atomName = capitalize.words(slug as string).replace(/-/g, '');

  return {
    props: {
      atomName,
      propData: {
        href: 'hello.com',
        children: 'hello',
      },
    },
  };
};

const Atom = ({ atomName, propData }: { slug: string }) => {
  const AtomComponent = componentList[atomName];

  return <AtomComponent {...propData} />;
};

export default Atom;
