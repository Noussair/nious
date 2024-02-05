export interface IStat {
    _id: string;
    number: number;
    caption: string;
    backgroundColor: string;
  }
  
export interface IStatSection {
_id: string;
title: string;
highlightTitle: string;
subtitle: string;
stats: IStat[];
footerText: string;
}