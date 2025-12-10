"use client";

import { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";
import { useGetCallById } from "@/hooks/useGetCallById";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useSession } from "next-auth/react";

const MeetingPage = () => {
  const { id } = useParams();
  const session = useSession();

  const user = session.data?.user;

  if (user) {
  }

  const { call, isCallLoading } = useGetCallById(id!);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (isCallLoading) return <Loader />;

  if (!call)
    return (
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme as="main">
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
