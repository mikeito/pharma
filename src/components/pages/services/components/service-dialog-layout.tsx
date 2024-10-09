'use client';

import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';
import { Typography } from 'src/components/ui/typography';
import ServiceForm from './service-form';

interface Props {
  id: number;
  title: string;
  image: string;
  triggerTitle: string;
  triggerIcon?: any;
}

export function ServiceDialogLayout({ title, image, id, triggerIcon, triggerTitle }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='group border w-fit rounded transition-colors flex  gap-x-2 items-center    py-4 px-8 duration-300 ease-in-out hover:border-primary cursor-pointer'>
          <img src={triggerIcon} className='size-8 ' />
          <Typography className='group-hover:text-primary transition-opacity duration-300'>{triggerTitle}</Typography>
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[620px]'>
        <div className='flex gap-x-8 items-center'>
          <img src={image} className='md:w-60 md:h-96' />
          <div className='pt-7'>
            <Typography variant='title' className='text-2xl'>
              {title}
            </Typography>
            <ServiceForm id={id} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
