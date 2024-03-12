export type SectionType = {
  imgUrl: string;
  text: string;
};

export type AddressType = {
  city: string;
  country: string;
  postCode: number;
  street: string;
};

export type ProfileType = {
  firstName: string;
  lastName: string;
  age: number;
  longHair: boolean;
  gender: boolean;
  favoriteColors: string[];
  addresses: AddressType[];
};

export type LinkType = {
  href: string;
  text: string;
};
