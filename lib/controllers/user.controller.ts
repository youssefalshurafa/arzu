'use server';

import { revalidatePath } from 'next/cache';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';

interface Params {
  userId: string;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  path: string;
}

export async function updateUser({
  userId,
  name,
  phoneNumber,
  email,
  address,
  path,
}: Params) {
  try {
    connectToDB();
    await User.findOneAndUpdate(
      { id: userId },
      {
        name: name,
        phoneNumber,
        email,
        address,
        onboarded: true,
        path,
      },
      { upsert: true }
    );

    if (path === '/profile/edit') {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user : ${error.message}`);
  }
}

export async function getUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
