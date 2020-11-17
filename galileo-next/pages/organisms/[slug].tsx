import { useRouter } from 'next/router';
import { GetOrganism } from '../../hooks/get-organism';

const Organism = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug) {
    return <GetOrganism organismId={slug as string} />;
  }

  return 'loading...';
};

export default Organism;
