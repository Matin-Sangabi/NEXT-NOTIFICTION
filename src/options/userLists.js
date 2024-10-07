import { queryOptions } from "@tanstack/react-query";
import { getAllUser } from "../service/auth.service";

export const usersOptions = queryOptions({
  queryKey: ["usersLists"],
  queryFn: () => getAllUser(),

});
