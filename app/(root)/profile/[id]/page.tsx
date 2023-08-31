import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import React from 'react';

export default async function Page() {
  const user = await currentUser();
  if (!user) return null;

  return (
    <section className=" items-center text-center">
      <h1 className=" text-5xl font-bold font-sans p-8">
        Hi, {user?.firstName}
      </h1>
      <div className="w-full">
        <Button onClick={redirect(`/profile/${user?.id}`)}>
          Please Update your profile
        </Button>
      </div>
    </section>
  );
}
