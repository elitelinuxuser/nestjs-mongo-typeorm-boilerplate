import { IsEmail, IsNotEmpty, Contains, IsDate, IsMongoId, IsEnum } from 'class-validator';
import { statusEnum } from "../entities/page.entity";

export class CreatePageDto {
  @IsMongoId()
  user: string;

  coverImage: string;

  introVideo: string;

  @IsNotEmpty()
  username:string;

  creating: string;

  about: string;

  @IsEnum(statusEnum)
  status: string;

  social:Object;

  premium: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  lastUpdated: Date; 
  
  @IsMongoId()
  rssTier: string;

  onboardingEmails: Number;

  gstin: string;

  isGSTComplete: Boolean;
}
