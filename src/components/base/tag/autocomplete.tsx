import React, { InputHTMLAttributes } from 'react';
import { Command, CommandList, CommandItem, CommandGroup, CommandEmpty } from 'src/components/ui/command';

import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover';
import { type Tag as TagType } from './tag-input';
import { Button } from '../../custom/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';

interface AutocompleteProps extends InputHTMLAttributes<HTMLButtonElement> {
  tags: TagType[];
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>;
  autocompleteOptions: TagType[];
  maxTags?: number;
  onTagAdd?: (tag: string) => void;
  allowDuplicates: boolean;
  children: React.ReactNode;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  tags,
  setTags,
  autocompleteOptions,
  maxTags,
  onTagAdd,
  allowDuplicates,
  children,
  placeholder,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='h-10 px-4 py-2 w-full text-sm gap-x-2 flex justify-start'>
          <PlusCircledIcon className=' h-4 w-4' />
          {placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0 ' align='start'>
        <Command className='border min-w-[400px]'>
          {children}
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              {autocompleteOptions.map((option) => (
                <CommandItem key={option.id}>
                  <div
                    className='w-full'
                    onClick={() => {
                      if (maxTags && tags.length >= maxTags) return;
                      if (!allowDuplicates && tags.some((tag) => tag.text === option.text)) return;
                      setTags([...tags, option]);
                      onTagAdd?.(option.text);
                    }}
                  >
                    {option.text}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
