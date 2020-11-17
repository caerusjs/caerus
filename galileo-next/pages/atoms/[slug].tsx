import { useRouter } from 'next/router';
import { GetAtom } from '../../hooks/get-atom';

const Atom = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug) {
    return <GetAtom atomId={slug as string} />;
  }

  return 'loading...';
};

export default Atom;
