'use server';

import Category from '../models/category.model';
import { connectToDB } from '../mongoose';

interface Params {
  name: string;
}
// Category controllers

export async function newCategory({ name }: Params) {
  try {
    await connectToDB();
    const category = await Category.create({ name });
    return category;
  } catch (error: any) {
    throw new Error(`Failed to create category : ${error.message}`);
  }
}

export async function getCategories() {
  try {
    await connectToDB();
    return await Category.find({});
  } catch (error: any) {
    throw new Error(`Failed to catch categories : ${error.message}`);
  }
}

export async function deleteCategory({ name }: Params) {
  try {
    await connectToDB();
    return await Category.findOneAndDelete({ name });
  } catch (error: any) {
    throw new Error(`Failed to delete category : ${error.message}`);
  }
}
