import { Document, model } from "mongoose";

export interface CamperInt extends Document {
  discordId: string;
}

export default model<CamperInt>("Camper");