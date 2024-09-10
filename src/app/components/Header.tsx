import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header className="bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "/bg_images/floral_bg_1.png", // Path to header background image
    }}>
      <div className="container flex items-center justify-center mx-auto my-4">
        <div className="flex items-center">
          {/* Logo on the left side of the company name */}
          <Image
            src="/workwise-logo/WorkWise-Logo-1.png" // Path to your logo in the public folder
            alt="WorkWise Logo"
            width={40} // Adjust the width to your preference
            height={40} // Adjust the height to your preference
          />
          <Link href="/" className="font-bold text-4xl text-red-600 ml-2">
            {" "}
            {/* Add margin-left for spacing */}
            WorkWise
          </Link>
        </div>
      </div>

      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"} className="font-bold text-2xl text-red-600">
        <FontAwesomeIcon icon={faHome} className="mr-2" size="sm" />
          Home
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link
              className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4"
              href={signInUrl}
            >
              Login/SignUp
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            className="rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-red-600 text-white"
            href={"/new-listing"}
          >
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}

