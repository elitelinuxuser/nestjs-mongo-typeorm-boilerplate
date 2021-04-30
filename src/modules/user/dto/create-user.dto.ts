import { IsEmail, IsNotEmpty, Contains, isDate } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @Contains("FAN | ARTIST | ADMIN")
  role: string

  coverImage: string;

  gstin: string;

  photoURL: string;

  phone: string;

  address: string;

  profession: string;

  premium: string;

  provider: string;

  referral: string;

  appLink: string;

  activated: Boolean;

  @isDate()
  activatedAt: Date;

  @isDate()
  createdAt: Date;

  @isDate()
  creatoronboarded: Date;

  @isDate()
  firstAppLogin: Date;

  @isDate()
  updatedAt: Date;

  status: string;

  billingState: string;

  tourCompleted: Boolean;

  updatedPhone: Boolean;

  registeredOnApp: Boolean;
}
