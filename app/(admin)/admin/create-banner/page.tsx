'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { changeBanner, getBanner } from '@/lib/controllers/banner.controller';
import {
  deleteFiles,
  listFiles,
  uploadFiles,
} from '@/lib/controllers/files.controller';
import { FormEvent, useState } from 'react';

export default function Page() {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsUploading(true);

      const fd = new FormData(e.target as HTMLFormElement);
      const uploadedFiles = await uploadFiles(fd);
      alert(`Uploaded ${uploadedFiles.length} files`);
      const imgUrl = uploadedFiles.map((img) => img.data?.url).toString();
      const imgKey = uploadedFiles.map((img) => img.data?.key).toString();
      setIsUploading(false);
      const banner = await getBanner();
      const bannerId = banner.map((item) => item._id);
      await changeBanner({ imgUrl: imgUrl, bannerId });
      const files = await listFiles();

      const oldImgFiles = files.filter((oldKeys) => oldKeys.key !== imgKey);
      const oldImgKeys = oldImgFiles.map((file) => file.key);
      console.log(oldImgKeys);

      await deleteFiles(oldImgKeys);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input name="files" type="file" multiple />
        <Button type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload File'}
        </Button>
      </form>
    </main>
  );
}
