import type { SchemaTypeDefinition } from "sanity";
import { aboutUsSectionType } from "./aboutUsSectionType";
import { benefitSectionType } from "./benefitSectionType";
import { contactInfoType } from "./contactInfoType";
import { ctoSectionType } from "./ctoSectionType";
import { headerSectionType } from "./headerSectionType";
import { homeType } from "./homeType";
import { logoType } from "./logoType";
import { socialsType } from "./socialsType";
import { statisticsSectionType } from "./statisticsSection";

export const schemaTypes = [
  homeType,
  headerSectionType,
  benefitSectionType,
  aboutUsSectionType,
  statisticsSectionType,
  ctoSectionType,
  socialsType,
  logoType,
  contactInfoType,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};