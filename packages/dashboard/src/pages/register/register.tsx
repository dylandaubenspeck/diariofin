import { Link } from "react-router-dom"
import { BlurImage } from "~/components/blur-image"
import Logo from "~/components/logo"

import RegisterForm from "./components/register-form"

export default function RegisterPage() {
  return (
    <div className="h-screen grid w-full grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 flex items-center justify-center md:col-span-2">
        <div className="w-full max-w-md overflow-hidden border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
            <Link to="/">
              <Logo className="h-10 w-10" />
            </Link>
            <h3 className="text-xl font-semibold">Crie sua conta</h3>
            <p className="text-sm text-gray-500">Comece agora mesmo.</p>
            <p className="text-sm text-gray-500">Sem cartão de crédito obrigatório.</p>
          </div>
          <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
            <RegisterForm />
          </div>
        </div>
      </div>

      <div className="hidden h-full flex-col justify-center space-y-12 overflow-hidden border-l border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur md:flex">
        <Link
          to="/"
          target="_blank"
          className="ml-12 h-1/2 w-[150%] rounded-xl border border-gray-200 bg-white/90 p-4 shadow-xl"
        >
          <BlurImage
            alt="Dashboard illustration"
            src="https://d2vwwcvoksz7ty.cloudfront.net/features/analytics.png"
            width={1735}
            height={990}
            className="h-full rounded-xl border border-gray-200 object-cover shadow-md"
          />
        </Link>
      </div>
    </div>
  )
}