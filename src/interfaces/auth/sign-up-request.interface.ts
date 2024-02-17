export interface SignUpRequest {
  email?: string;
  phoneNumber?: string;
  username?: string;
  password: string;
  hasAcceptedTerms: boolean;
  referralCode?: string;
  countryCode?: string;
  language?: string;
}
