export interface CustomerResponse {
    contact: CustomerContact;
    message: string;
  }
  
  interface CustomerContact {
    name: string;
    contactEmail: string;
    contactPhone: string;
    fromWhere: string;
    id: string;
  }
  