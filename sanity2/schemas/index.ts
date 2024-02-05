import teamSchema from "./teamSchema"
import ourWorkSchema from "./ourWorkSchema"
import { category,galleryItem} from "./ourWorkSchema"
import ProcessSchema,{processStep} from "./ProcessSchema"
import { statItem,statSection} from "./numbersSchema"
import { Partner, PartnersSection } from "./partnersSchema"
import { SkillSchema, skillsSchema } from "./skillsSchema"
export const schemaTypes = [
    teamSchema,
    ourWorkSchema,
    ProcessSchema,
    statSection,
    PartnersSection,
    skillsSchema,
    category,
    galleryItem,
    processStep,
    statItem,
    Partner,
    SkillSchema
]
