import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AuthLoginInput {
  @Field()
  name: string;

  @Field()
  password: string;
}
