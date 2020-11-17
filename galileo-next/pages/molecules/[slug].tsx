import { useRouter } from 'next/router';
import { GetMolecule } from '../../hooks/get-molecule';

const Molecule = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug) {
    return <GetMolecule moleculeId={slug as string} />;
  }

  return 'loading..';
};

export default Molecule;
