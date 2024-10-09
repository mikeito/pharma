
import { redirect } from "next/navigation";
import Navbar from "./Navbar";
import SessionProvider from "./SessionProvider";
import { validateRequest } from "src/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();
  // console.log("session ", session);
  // console.log("session ", session.session);
  // console.log("session ", session.user);

  // if (!session.user) redirect("/");

  return (
    <div >
      {/* <div className="flex min-h-screen flex-col">
        <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Make your search
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div> */}

      {/* <div className="bg-white">
        <Navbar /> */}
        {children}
      {/* </div> */}
    </div>
  );
}
