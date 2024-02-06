// state.ts
import { atom } from 'recoil';
import { GalleryItem } from '../types/ourWorkSection';


export const modalState = atom({
  key: 'modalState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const selectedItemState = atom<GalleryItem | null>({
  key: 'selectedItemState',
  default: null,
});
