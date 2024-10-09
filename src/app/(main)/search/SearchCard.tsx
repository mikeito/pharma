// import { PillBottle } from 'lucide-react'
import {  PillIcon } from 'lucide-react';
import React from 'react'

const SearchCard = ({organisation}:any) => {

  const {type, name, description, image} = organisation
    const backgroundImageStyle = {
        backgroundImage: `url('${image}')`,
      };

  return (
    <div className="w-full my-2 max-w-sm lg:flex lg:max-w-full rounded-md overflow-y-auto">
    <div
      className="h-20 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
      style={backgroundImageStyle}
      title="Woman holding a mug"
    ></div>
    <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
      <div className="mb-8">
        <p className="flex items-center text-sm text-gray-600">
          <PillIcon size={14} />
          {type}
        </p>
        <div className="mb-2 text-xl font-bold text-gray-900">
        {name}
        </div>
        <p className="text-base text-gray-700 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default SearchCard