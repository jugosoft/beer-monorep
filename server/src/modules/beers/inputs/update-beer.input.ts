import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBeerInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  alcohol: number;

  @Field({ nullable: true })
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
