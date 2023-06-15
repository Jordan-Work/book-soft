export interface BookDetails {
  id: string;
  imageLink: string;
  category: string;
  title: string;
  price: string;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
export type FormEvent = React.FormEvent<EventTarget>