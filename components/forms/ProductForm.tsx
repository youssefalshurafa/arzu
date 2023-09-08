'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ProductType } from '@/lib/Types';
import { ProductValidation } from '@/lib/validations/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { uploadFiles } from '@/lib/controllers/files.controller';
import { ChangeEvent, FormEvent, useState } from 'react';
import { UploadButton } from '@/lib/utils/uploadthing';

const Page = () => {
  const [thumbnail, setThumbnail] = useState<any[]>([]);
  const form = useForm({
    resolver: zodResolver(ProductValidation),
  });

  console.log('Thumbnail: ', thumbnail);

  const onSubmit = async (
    values: z.infer<typeof ProductValidation>,
    e: FormEvent<HTMLFormElement>
  ) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Title</FormLabel>
              <FormControl>
                <Input type="text" className="border no-focus" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Code</FormLabel>
              <FormControl>
                <Input type="text" className="border no-focus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Price</FormLabel>
              <FormControl>
                <Input type="text" className="border no-focus" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Size</FormLabel>
              <FormControl>
                <Input type="text" className="border no-focus" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Category</FormLabel>
              <FormControl>
                <Input type="text" className="border no-focus" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Stock</FormLabel>
              <FormControl>
                <Input type="text" className="border no-focus" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Thumbnail</FormLabel>
              <FormControl>
                <UploadButton
                  endpoint="media"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    if (res) setThumbnail(res?.map((item) => item.url));

                    console.log('Files: ', res);

                    alert('Upload Completed');
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  className="border no-focus cursor-pointer"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className=" font-semibold">Description</FormLabel>
              <FormControl>
                <Textarea rows={3} className="border no-focus" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className=" bg-purple-700">
          Create
        </Button>
      </form>
    </Form>
  );
};

export default Page;
