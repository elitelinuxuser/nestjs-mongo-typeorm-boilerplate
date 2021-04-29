import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true  })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default:"FAN", enum: ["FAN", "ARTIST", "ADMIN"] })
  public role: string;

  @Prop({ default: "none" })
  coverImage: string;

  @Prop({ default: "none" })
  gstin: string;

  @Prop({ default: "none"})
  photoURL: string;

  @Prop({ default: "none" })
  phone: string;

  @Prop({ default: "none" })
  address: string;

  @Prop({ default: "none" })
  profession: string;

  @Prop({ default: "none" })
  premium: string;

  @Prop({ default: "email" })
  provider: string;

  @Prop({ default: "none" })
  referral: string; 

  @Prop({ default: "none" })
  appLink: string; 

  @Prop({ default: false })
  activated: Boolean; 

  @Prop({ default: null })
  activatedAt: Date; 

  @Prop({ default: Date.now })
  createdAt: Date; 

  @Prop({ default: null })
  creatorOnboarded: Date; 

  @Prop({ default: false })
  appUser: Boolean; 

  @Prop({ default: null })
  firstAppLogin: Date; 

  @Prop({ default: false })
  registeredOnApp: Boolean; 

  @Prop({ default: false })
  updatedPhone: Boolean; 

  @Prop({ default: false })
  tourCompleted: Boolean; 

  @Prop({ default: "none" })
  billingState: string; 

  @Prop({ default: null })
  updatedAt: Date; 

  @Prop({ default:"ACTIVE", enum: ["ACTIVE", "PENDING", "BANNED"] })
  status: string; 
}

export const UserSchema = SchemaFactory.createForClass(User);
