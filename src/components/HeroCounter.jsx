import { useHero } from '../hooks/useHero';

const HeroCounter = () => {
  const queryInfo = useHero();
  return <div>{queryInfo.data?.length}</div>;
};
export default HeroCounter;
