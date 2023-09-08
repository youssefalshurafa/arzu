import { currentUser } from '@clerk/nextjs/server';
import { getUser } from '@/lib/controllers/user.controller';
import Mainnav from './Mainnav';

const Navbar = async () => {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await JSON.parse(JSON.stringify(await getUser(user.id)));

  return (
    <nav className="sticky  top-0 z-30">
      <Mainnav userInfo={userInfo} />
    </nav>
  );
};

export default Navbar;
