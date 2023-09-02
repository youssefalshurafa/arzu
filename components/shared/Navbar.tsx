'use client';

import {
  SignedOut,
  SignInButton,
  SignedIn,
  SignOutButton,
} from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Menu, ShoppingBag, Heart, User, LogIn, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

function Navbar({ user }: any) {
  const category = [
    { id: 1, name: 'Kids' },
    { id: 2, name: 'Tracksuits' },
    { id: 3, name: 'Tunics' },
    { id: 4, name: 'Basics' },
    { id: 5, name: 'Dresses' },
  ];
  const router = useRouter();
  const roles = user.roles;

  return (
    <>
      <nav className=" flex justify-between px-6 py-3 bg-slate-50 drop-shadow-md">
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 h-full w-screen">
              <DropdownMenuLabel className=" mx-auto text-center text-2xl font-semibold">
                Menu
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {category.map((category, i) => (
                <DropdownMenuItem
                  key={i}
                  className=" justify-center text-lg font-semibold cursor-pointer"
                  onClick={() => router.push(`/category/${category.name}`)}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <h1
            onClick={() => router.push('/')}
            className="text-2xl font-semibold cursor-pointer"
          >
            Arzu
          </h1>
        </div>
        <div className="hidden md:flex gap-4 font-semibold items-center">
          {category.map((category, i) => (
            <p key={i} className=" hover:cursor-pointer">
              {category.name}
            </p>
          ))}
        </div>

        <SignedOut>
          <div className="flex gap-4 absolute right-5">
            <SignInButton>
              <div className="flex gap-2 cursor-pointer">
                <LogIn />
                <p className="font-semibold text-blue-500 underline">
                  {' '}
                  Sign-in
                </p>
              </div>
            </SignInButton>
            <Heart className=" hover: cursor-pointer" />
            <ShoppingBag />
          </div>
        </SignedOut>
        <div className="flex items-center gap-3 md:gap-8">
          <SignedIn>
            <div className="flex gap-4 items-center">
              {roles.Admin || roles.Editor ? (
                <Button size={'sm'}>Admin</Button>
              ) : (
                <></>
              )}
              <SignOutButton>
                <div className="flex gap-2 cursor-pointer">
                  <LogOut />
                  <p className="font-semibold text-blue-500 underline">
                    {' '}
                    Sign-out
                  </p>
                </div>
              </SignOutButton>
              <User
                onClick={() => router.push(`/profile/${user.id}`)}
                className=" hover: cursor-pointer"
              />
              <Heart className=" hover: cursor-pointer" />
              <ShoppingBag className=" hover: cursor-pointer" />
            </div>
          </SignedIn>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
