'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ProductValidation } from '@/lib/validations/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { UploadButton, UploadDropzone } from '@/lib/utils/uploadthing';
import { useToast } from '@/components/ui/use-toast';
import { Res } from '@/lib/Types';
import { createProduct } from '@/lib/controllers/product.controller';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const Page = ({ categories }: any) => {
  const [thumbnail, setThumbnail] = useState({});
  const [images, setImages] = useState<Res[]>([]);

  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(ProductValidation),
  });

  // console.log('Thumbnail: ', thumbnail);
  // console.log('Images: ', images);

  const onSubmit = async (values: z.infer<typeof ProductValidation>) => {
    try {
      if (
        values.title &&
        values.code &&
        values.price &&
        values.size &&
        values.category
      ) {
        await createProduct({
          title: values.title,
          code: values.code,
          price: values.price,
          size: values.size,
          stock: values.stock,
          category: values.category,
          thumbnail: thumbnail,
          images: images,
          description: values.description,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <Input type="string" className="border no-focus" {...field} />
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
                <Input type="string" className="border no-focus" {...field} />
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categories.map((cat: any) => (
                        <SelectItem value={cat._id}>{cat.name}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                  className=" ut-button:bg-purple-700 ut-contianer:w-full :"
                  endpoint="thumbnail"
                  onClientUploadComplete={(res) => {
                    // Do something with the response

                    if (res) {
                      const imgKey = res
                        ?.map((item) => item.fileKey)
                        .toString();
                      const imgUrl = res?.map((item) => item.url).toString();
                      var object = {
                        imgKey: imgKey,
                        imgUrl: imgUrl,
                      };
                      setThumbnail(object);
                    }

                    toast({
                      title: 'Upload Completed',
                    });
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
                <UploadDropzone
                  className=" ut-button:bg-purple-700 ut-contianer:w-full :"
                  endpoint="images"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    if (res) {
                      console.log('res : ', res);
                      setImages(res);
                    }
                    toast({
                      title: 'Upload Completed',
                    });
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
