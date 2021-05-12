import { IsEmail, IsNotEmpty, Contains, IsDate, IsEnum } from "class-validator";
import { roleEnum, userStatus } from "../entities/user.entity";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(roleEnum)
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

  @IsDate()
  activatedAt: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  creatorOnboarded: Date;

  @IsDate()
  firstAppLogin: Date;

  @IsDate()
  updatedAt: Date;

  @IsEnum(userStatus)
  status: string;

  billingState: string;

  tourCompleted: Boolean;

  updatedPhone: Boolean;

  registeredOnApp: Boolean;
}
