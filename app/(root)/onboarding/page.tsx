import AccountProfile from '@/components/forms/AccountProfile';
import { getUser } from '@/lib/controllers/user.controller';
import { currentUser } from '@clerk/nextjs';

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await getUser(user?.id);

  const userData = {
    id: user?.id,

    name: userInfo ? userInfo?.name : '',
    phoneNumber: userInfo ? userInfo?.phoneNumber : '',
    address: userInfo ? userInfo?.address : '',
    email: userInfo
      ? userInfo?.email
      : '' ||
        user?.emailAddresses.map((email) => email.emailAddress).toString(),
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-3xl font-bold">Onboarding</h1>
      <p className="mt-3 text-base">
        Complete your profile to be able to order
      </p>
      <section className="mt-9 p-10 bg-slate-50">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
