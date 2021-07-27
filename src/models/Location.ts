export interface HttpResponseGetLocation {
  city: string;
  contryCode: string;
  regionName: string;
  status: "success" | "failed";
}
