'use server';

import { ProductType } from '../Types';
import Category from '../models/category.model';
import Product from '../models/product.model';
import { connectToDB } from '../mongoose';

interface Params {
  id?: string;
  name?: string;
  newName?: string;
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

export async function updateCategory({ name, newName }: Params) {
  try {
    await connectToDB();
    await Category.findOneAndUpdate({ name }, { name: newName });
  } catch (error: any) {
    throw new Error(`Failed to update category : ${error.message}`);
  }
}

// Product controllers

export async function createProduct({
  title,
  code,
  description,
  price,
  size,
  category,
  stock,
  thumbnail,
  images,
}: ProductType) {
  try {
    await connectToDB();
    await Product.create({
      title,
      code,
      description,
      price,
      size,
      category,
      stock,
      thumbnail,
      images,
    });
  } catch (error: any) {
    throw new Error(`Failed to create product : ${error.message}`);
  }
}
