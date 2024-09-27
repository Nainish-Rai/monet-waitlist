export interface BrandResponse {
  contact: BrandContact;
  message: string;
}

interface BrandContact {
  brandName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  brandWebsite: string;
  existingLoyalty: string;
  message: string;
  id: string;
}
