export interface OrganizationPostRequest {
  name: string;
  country: string;
  postalCode?: string;
  city: string;
  business: string;
  image: File;
  email: string;
  password: string;
}

export interface UserPostRequest {
  firstName: string;
  lastName: string;
  country: string;
  postalCode?: string;
  city: string;
  image: File;
  email: string;
  password: string;
}
