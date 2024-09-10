// import Image from "next/image";
// import Hero from "@/app/components/Hero";
// import Jobs from "@/app/components/Jobs";

// import {
//   getSignInUrl,
//   getSignUpUrl,
//   getUser,
//   signOut,
// } from '@workos-inc/authkit-nextjs';


// export default async function Home() {



//   // Retrieves the user from the session or returns `null` if no user is signed in
//   const { user } = await getUser();

//   // Get the URL to redirect the user to AuthKit to sign in
//   const signInUrl = await getSignInUrl();

//   // Get the URL to redirect the user to AuthKit to sign up
//   const signUpUrl = await getSignUpUrl();


//   return (
//     <>
//       <Hero />
//       <Jobs />
//     </>
//   );
// }
import Hero from "@/app/components/Hero";
import Jobs from "@/app/components/Jobs";
import {addOrgAndUserData, JobModel} from "@/models/Job";
import {getUser} from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";

export default async function Home() {
  const {user} = await getUser();
  await mongoose.connect(process.env.MONGO_URI as string);
  const latestJobs = await addOrgAndUserData(
    await JobModel.find({},{},{limit:5,sort:'-createdAt'}),
    user,
  );
  return (
    <>
      <Hero />
      <Jobs header={''} jobs={latestJobs} />
    </>
  );
}