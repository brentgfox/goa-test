import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class HelloResolver {

    @Query(returns => String)
    async hello() {
        return "Hello, GoA, this is the test from the resolver...."
    }
}