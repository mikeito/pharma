"use client";

import React, { PureComponent } from "react";
import SearchCard from "./SearchCard";
import { orgs } from "./data";
import { useSelector } from "react-redux";
import { selectOrganisations } from "src/redux/modules/organisations/organisationSelectors";

export default function rightBlock() {
  const organisations = useSelector(selectOrganisations)
  console.log({ organisations })

  if (!organisations) {
    return <>Loading</>
  }else {
    <p>good man</p>
  }

  console.log("//7778888");
  
  console.log('**********', organisations);
  

  return (
    <div className="max-w-[500px] flex-col gap-y-4 overflow-y-auto bg-blue-400 px-2">
      
      {(organisations?.length > 0 ? organisations : orgs)?.map((organisation: any, index: any) => (
            <SearchCard key={index} organisation={organisation} />
          ))}
    </div>
  );
}
