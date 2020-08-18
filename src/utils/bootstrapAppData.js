import { getUser } from "../api/auth";

const bootstrapAppData = async () => {
  const user = await getUser();
  if (!user) {
    return { user: null };
  }
  return { user };
};

export default bootstrapAppData;
