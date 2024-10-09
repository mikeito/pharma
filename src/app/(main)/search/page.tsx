"use client"
import "mapbox-gl/dist/mapbox-gl.css";
import SearchForm from "./SearchForm";
import MapBox from "./MapBox";
import SearchCard from "./SearchCard";
import { orgs } from "./data";
import { useSelector } from "react-redux";
import { searchOrganisations } from "src/redux/modules/organisations/organisationSelectors";



const SearchPage = () => {
  const organisations = useSelector(searchOrganisations)
  console.log({ organisations })

  return (
    <div className="flex h-screen w-full flex-col">
      {/* // header */}
      <div className="flex  min-h-12 w-full items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-semibold">Douala Pharmacy App</h1>

          <SearchForm />

        </div>
      </div>

      <div className="flex h-full overflow-y-hidden">
        <div className="flex-grow bg-slate-900">
          <MapBox />
        </div>
        <div className="max-w-[500px]  overflow-y-auto flex-col gap-y-4 bg-blue-400 px-2">
          {(organisations?.length > 0 ? organisations : orgs)?.map((organisation: any, index: any) => (
            <SearchCard key={index} organisation={organisation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

