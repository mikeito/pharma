import { Organisation } from "@prisma/client";
import db from "../../../lib/prisma";

interface FormSearch {
  type: string;
  term: string;
}

export async function getOrganisations(): Promise<Organisation[]> {
    try {
      const organisation = await db.organisation.findMany();
      return organisation;
    } catch (error) {
      throw error;
    }
  }
  
  export async function searchOrganisations(formData: FormSearch): Promise<Organisation[]> {
    try {
      const organisation = await db.organisation.findMany({
        where: {
          type: formData.type,
          address: {
            search: formData.term
          }
        }
      });
      return organisation;
    } catch (error) {
      throw error;
    }
  }