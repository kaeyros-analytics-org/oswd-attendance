import { Button } from "@/components/ui/button";
import Image from "next/image";
import SignupModule from "./module/SignupModule";

// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'
// export const maxDuration = 5

async function getAllClients() {
  try {
    const users = await fetch(`${ process?.env?.API_URL }/api/ows_bootcamp_users`, {
        cache: "no-store", 
        // next: { revalidate: 10 }, 
    }); 
    return users.json()
  } catch (error) {
      console.log("Error loading attendancesToday: ", error); 
  }
  
}

export default async function Home () {
  const allUsers = await getAllClients()
  console.log(allUsers, ">>>>>>>>>>")
  return (
    <div>
      <SignupModule />
    </div>
  );
}

