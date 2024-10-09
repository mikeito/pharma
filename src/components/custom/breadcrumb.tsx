'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'src/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import capitalizeFirstLetter from 'src/helpers/capitalize';

export default function PageBreadcrumb() {
  const pathname = usePathname();

  const pathArray = pathname.split('/');

  const links = pathArray.map((item) => ({ path: `/${item}`, name: item === '' ? 'Home' : item }));
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, i: number) => {
          if (i === links.length - 1) {
            return (
              <BreadcrumbItem key={i}>
                <BreadcrumbPage>{capitalizeFirstLetter(link.name)}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
          return (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href={link.path}>{capitalizeFirstLetter(link.name)}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
