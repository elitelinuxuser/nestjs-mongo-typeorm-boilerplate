import { Prop, Schema, SchemaFactory, Ref  } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ConfigurationDocument = Configuration & Document;

@Schema({ timestamps: true })
export class Configuration {
  @Prop({ required:true , enum: ["AUTO_APPROVE_PAGE", "AUTO_APPROVE_TIER"] })
  type: string;

  @Prop({ default: false })
  enabled: Boolean; 

  @Prop({ default: null })
  payload: Object;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
