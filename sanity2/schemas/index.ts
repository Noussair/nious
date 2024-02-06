import teamSchema from "./teamSchema"
import ourWorkSchema from "./ourWorkSchema"
import { category,galleryItem} from "./ourWorkSchema"
import ProcessSchema,{processStep} from "./ProcessSchema"
import { statItem,statSection} from "./numbersSchema"
import { Partner, PartnersSection } from "./partnersSchema"
import { SkillSchema, skillsSchema } from "./skillsSchema"
import { AboutUsSchema } from "./AboutUsSchema"
import { HeroSectionSchema } from "./HeroSchema"

export const schemaTypes = [
    teamSchema,
    ourWorkSchema,
    ProcessSchema,
    statSection,
    PartnersSection,
    skillsSchema,
    AboutUsSchema,
    HeroSectionSchema,
    category,
    galleryItem,
    processStep,
    statItem,
    Partner,
    SkillSchema
]
