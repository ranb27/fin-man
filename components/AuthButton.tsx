import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      {user.email?.split("@")[0]}
      <form action={signOut}>
        <button className="btn btn-error btn-sm btn-outline text-error-content">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="btn btn-sm btn-success btn-outline text-success-content"
    >
      Login Now
    </Link>
  );
}
