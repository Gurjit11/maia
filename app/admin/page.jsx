import Image from "next/image";
import Link from "next/link";
import icon from "../../public/icon.png";

const Admin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="justify-center w-full items-center gap-2 flex">
        <Image src={icon} alt="logo" height={120} />
      </div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Admin Panel</h1>
      <p className="text-lg mb-6">Please log in to continue</p>
      <Link
        href="/admin/login"
        className="px-8 py-2 bg-slate-700 font-bold text-white rounded hover:bg-slate-500"
      >
        Login
      </Link>
    </div>
  );
};

export default Admin;
