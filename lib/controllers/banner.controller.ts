'use server';

import Banner from '../models/banner.model';
import { connectToDB } from '../mongoose';

export async function changeBanner({ imgUrl, bannerId }: any) {
  try {
    await connectToDB();
    await Banner.findOneAndUpdate({ bannerId: bannerId }, { imgUrl });
  } catch (error: any) {
    throw new Error(`Failed to create/update banner : ${error.message}`);
  }
}

export async function getBanner() {
  try {
    await connectToDB();
    return await Banner.find({});
  } catch (error: any) {
    throw new Error(`Failed to create/update banner : ${error.message}`);
  }
}
