import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Link from "next/link";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-base-100">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6 text-base-content">
          <div className="hero my-auto">
            <div className="hero-content text-left">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold font">Fin Man</h1>
                <p className="py-6">
                  Finance Management App. Take control of your financial with
                  our platform makes managing your money easier. Track your
                  progress, and make adjustments as needed with confidence.
                  Discover the benefits of smart budgeting and effective
                  financial planning, all within a single, comprehensive tool.
                </p>

                <Link href="/pages/dashboard" className="btn btn-primary">
                  Go to Dashboard
                </Link>

                {/* {isSupabaseConnected && <AuthButton />} */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
