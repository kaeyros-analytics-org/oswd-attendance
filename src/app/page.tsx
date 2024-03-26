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

export default function Home() {
  return (
    <div>
      <SignupModule />
      {/* hi
      <Button 
        name="name"
        className="bg-backgroundOSWD"
      >
        save
      </Button>
      */}

    </div>
  );
}

// export const dynamic = 'auto'
