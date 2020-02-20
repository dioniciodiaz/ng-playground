import { Post } from './post';

interface AddressGeolocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeolocation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company: Company;
  posts?: Post[];
}
