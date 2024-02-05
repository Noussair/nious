export const ProcessSchemaQuery = `
*[_type == "processSection"][0]{
    _id,
    "processSteps": *[_type == "processStep"],
    sectionTitle,
    highlightedTitle,
    headerText,
    headerText,
    headerHighlight,
    description
}
`;
