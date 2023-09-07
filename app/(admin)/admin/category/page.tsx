'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import {
  deleteCategory,
  getCategories,
  newCategory,
} from '@/lib/controllers/product.controller';
import { FormEvent, useEffect, useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const Page = () => {
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<String[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await newCategory({ name });
      console.log(name);
      setIsLoading(false);
      toast({
        title: 'New Category created!',
        description: `Category name: ${name}`,
      });
      setName('');
      getAllCategories();
    } catch (error) {}
  };

  const getAllCategories = async () => {
    try {
      const response = await getCategories();

      setCategories(response.map((item) => item.name));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  console.log(`name: ${name}`);

  const deleteCat = async () => {
    try {
      await deleteCategory({ name: name });
      getAllCategories();
      setName('');
      toast({
        title: 'Category deleted',
        description: `Category name: ${name}`,
        variant: 'destructive',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-12 ml-6">
        <div className="flex flex-col gap-6 ">
          <h1 className=" text-3xl font-bold">Create a New Category</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Type your new category here..."
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">{isLoading ? 'Loading...' : 'Create'}</Button>
          </form>
        </div>
        <div className="flex flex-col gap-6 ">
          <h1 className=" text-3xl font-bold">Current Categories</h1>
          {categories.map((category, i) => (
            <>
              <div
                key={i}
                className="flex  w-full justify-between  p-2 items-center"
              >
                <div className="flex">
                  <p className="font-semibold text-lg">{category}</p>
                </div>

                <div className="flex gap-6">
                  <Button>Edit</Button>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                      <Button
                        onClick={() => setName(category.toString())}
                        variant={'destructive'}
                      >
                        Delete
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Portal>
                      <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                      <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                          Are you absolutely sure?
                        </AlertDialog.Title>
                        <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                          This action cannot be undone.
                        </AlertDialog.Description>
                        <div className="flex justify-end gap-[25px]">
                          <AlertDialog.Cancel asChild>
                            <Button>Cancel</Button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action asChild>
                            <Button onClick={deleteCat} variant={'destructive'}>
                              Yes, delete category
                            </Button>
                          </AlertDialog.Action>
                        </div>
                      </AlertDialog.Content>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                </div>
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
