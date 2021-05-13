import { Prop, Schema, SchemaFactory, Ref  } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ConfigurationDocument = Configuration & Document;

export enum configTypeEnum {
  "AUTO_APPROVE_PAGE",
  "AUTO_APPROVE_TIER",
} 

@Schema({ timestamps: true })
export class Configuration {
  @Prop({ required:true , enum: Object.values(configTypeEnum) })
  type: string;

  @Prop({ default: false })
  enabled: Boolean; 

  @Prop({ default: null })
  payload: Object;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
