import { Prop, Schema, SchemaFactory, Ref  } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type StagingPageDocument = StagingPage & Document;

export enum statusEnum {
  "ACTIVE",
  "REJECTED",
  "PENDING",
  "OBSOLETE"
} 

@Schema({ timestamps: true })
export class StagingPage {
  @Prop({ required: true, type: Types.ObjectId, ref: "Users" })
  public user!: Ref<unknown>;

  @Prop({ default: "none" })
  coverImage: string;

  @Prop({ default: "none" })
  introVideo: string;

  @Prop({ required: true })
  username: string;

  @Prop({ default: "none"})
  creating: string;

  @Prop({ default: "none" })
  about: string;

  @Prop({ default: "ACTIVE", enum: Object.values(statusEnum) })
  status: string;

  @Prop({ default: null })
  social: Object;

  @Prop({ default: "none" })
  premium: string;

  @Prop({ default: Date.now })
  createdAt: Date; 

  @Prop({ default: Date.now })
  lastUpdated: Date; 

  @Prop({ required: true, type: Types.ObjectId, ref: "Tiers" })
  public rssTier: Ref<unknown>;

  @Prop({ default: false })
  onboardingEmails: Number; 

  @Prop({ default: null })
  onboardingQuestions: Object; 

  @Prop({ default: "none" })
  gstin: string;

  @Prop({ default: false })
  isGSTComplete: Boolean; 
}

export const StagingPageSchema = SchemaFactory.createForClass(StagingPage);
