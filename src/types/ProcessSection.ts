export interface IProcessSection {
    _id: string;
    _type: 'processSection';
    sectionTitle: string;
    highlightedTitle: string;
    headerText: string;
    headerHighlight: string;
    description: string;
    processSteps: IProcessStep[];
}


export interface IProcessStep {
    _id: string;
    _type: 'processStep';
    title: string;
    icon: any;
    description: string;
}

