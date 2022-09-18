import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserRtInput {
  @Field()
  id: number;

  @Field()
  hashedRT: string;
}
