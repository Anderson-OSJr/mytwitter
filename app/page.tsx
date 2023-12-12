import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">

        <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-500 rounded-md">

            <div className = "text-center my-4 text-gray-50">
                <h1>My Twitter</h1>
            </div>

            <div>
                <Link href="/signin"
                className = "bg-slate-700 my-4 p-3 rounded-lg block text-gray-50 ">Sign In</Link>
            </div>

            <div>
                <Link href="/signup"
                className = "bg-slate-700 my-4 p-3 rounded-lg block text-gray-50 ">Sign Up</Link>
            </div>

        </div>  
    </main>
  )
}
