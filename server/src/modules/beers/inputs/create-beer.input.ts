import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBeerInput {
  @Field()
  name: string;

  @Field()
  alcohol: number;

  @Field()
  bitterness: number;

  @Field({ nullable: true })
  original_gravity: number;

  @Field({ nullable: true })
  final_gravity: number;

  @Field({ nullable: true })
  colour_srm: number;

  @Field({ nullable: true })
  colour_ebc: number;

  @Field({ nullable: true })
  barrel_aged: number;
}
