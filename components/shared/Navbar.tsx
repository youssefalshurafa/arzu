'use client';

import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  currentUser,
} from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Menu, ShoppingBag, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Navbar() {
  const category = [
    { id: 1, name: 'Kids' },
    { id: 2, name: 'Tracksuits' },
    { id: 3, name: 'Tunics' },
    { id: 4, name: 'Basics' },
    { id: 5, name: 'Dresses' },
  ];
  const router = useRouter();
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
                  className=" justify-center text-lg font-semibold"
                  onClick={() => router.push(`/category/${category.id}`)}
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
          <SignInButton />
          <ShoppingBag />
        </SignedOut>
        <div className="flex items-center gap-3 md:gap-8">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Heart />
            <ShoppingBag />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
