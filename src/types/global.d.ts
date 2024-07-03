export {};

declare global {
  interface Window {
    mainUrl: string;
    nextUrl: string;
    baseUrl: string;
    OTCSTicket: string;
    currentUserId: number;
    currentRole: string;
    asManager: string;
    checkFirst: boolean;
    wbIds: {
      sendInLeader: number;
      approveInEmployee: number;
      approveInLeader: number;
    };
  }
}
