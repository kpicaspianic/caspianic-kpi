export {};

declare global {
  interface Window {
    mainUrl: string;
    nextUrl: string;
    baseUrl: string;
    OTCSTicket: string;
    currentUserId: number;
    currentRole: string;
    checkFirst: boolean;
  }
}
