import * as React from 'react';
import type { UploadedFile } from 'src/types';
import { toast } from 'sonner';
import type { UploadFilesOptions } from 'uploadthing/types';

import { getErrorMessage } from 'src/lib/handle-error';
import { uploadFiles } from 'src/lib/uploadthing';
// import { type OurFileRouter } from "src/app/api/uploadthing/core"

interface UseUploadFileProps
  extends Pick<UploadFilesOptions<any, keyof any>, 'headers' | 'onUploadBegin' | 'onUploadProgress' | 'skipPolling'> {
  defaultUploadedFiles?: UploadedFile[];
}

export function useUploadFile(endpoint: keyof any, { defaultUploadedFiles = [], ...props }: UseUploadFileProps = {}) {
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>(defaultUploadedFiles);
  const [progresses, setProgresses] = React.useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = React.useState(false);

  async function uploadThings(files: File[]) {
    setIsUploading(true);
    try {
      const res = await uploadFiles(endpoint, {
        ...props,
        files,
        // onUploadProgress: ({ file, progress }) => {
        //   setProgresses((prev) => {
        //     return {
        //       ...prev,
        //       [file]: progress,
        //     }
        //   })
        // },
      });

      setUploadedFiles((prev) => (prev ? [...prev, ...res] : res));
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setProgresses({});
      setIsUploading(false);
    }
  }

  return {
    uploadedFiles,
    progresses,
    uploadFiles: uploadThings,
    isUploading,
  };
}
