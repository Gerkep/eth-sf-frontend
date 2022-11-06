import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Loading from '../components/Loading';

const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' },
]

const Landing = () => {
  return (
    <div className="bg-white">
      <Loading />
      <div>
        <Popover className="relative bg-white">
          <div className="mx-auto flex w-full items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <div>
                  <span className="sr-only">Your Company</span>
                  <div className="h-8 w-8 sm:h-10 relative">
                  <Image alt="logo" layout='fill' objectFit='contain'  src={"https://media.discordapp.net/attachments/1038274401424130128/1038742938588565564/image.png"}></Image>
                  </div>
                </div>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <ConnectButton />
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                    <div className="h-8 w-14 sm:h-10 relative">
                      <Image alt="logo" layout='fill' objectFit='contain'  src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"}></Image>
                    </div>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <ConnectButton />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>

      <div>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <div className="h-full w-full object-cover">
                  <Image alt="shop" layout='fill' objectFit='cover'  src={"https://images.unsplash.com/photo-1647427017067-8f33ccbae493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}></Image>
                  </div>
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Take control over your</span>
                    <span className="block text-indigo-200">finances.</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Build indisputable on-chain reputation and books as a store, browse only reliable reviews from buyers as a customer.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="flex items-center justify-center sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link href="/store">
                        <button
                          className="flex mr-6 items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                        >
                          Store app
                        </button>
                      </Link>
                      <Link href="/customer">
                      <button
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Customer app
                      </button>
                      </Link>
                    </div>
                  </div>
                  <div className='w-full flex justify-center mt-6'>
                  <Link href="/stores">
                      <button
                        className="flex items-center justify-center px-4 py-3 text-base font-medium text-white sm:px-8"
                      >
                        Explore stores
                      </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base font-medium text-gray-500">
                Powered by the best
              </p>
              <div className="mt-4 flex justify-center flex-wrap">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <div className="h-16 w-40 relative mr-7 ml-7 cursor-pointer grayscale opacity-80 hover:opacity-100 hover:grayscale-0">
                    <Image alt="tuple" layout='fill' objectFit='contain'  src={"https://xmtp.org/img/logomark.svg"}></Image>
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <div className="h-16 w-48 relative mr-7 ml-7 cursor-pointer grayscale opacity-80 hover:opacity-100 hover:grayscale-0">
                    <Image alt="tuple" layout='fill' objectFit='contain'  src={"https://worldcoin.org/icons/logo.svg"}></Image>
                  </div>
                </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <div className="h-16 w-40 relative mr-7 ml-7 cursor-pointer grayscale opacity-80 hover:opacity-100 hover:grayscale-0">
                    <Image alt="tuple" layout='fill' objectFit='contain'  src={"https://seeklogo.com/images/S/skale-labs-logo-BB412F465C-seeklogo.com.png"}></Image>
                  </div>
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <div className="h-18 w-48 relative mr-7 ml-7 cursor-pointer grayscale opacity-80 hover:opacity-100 hover:grayscale-0">
                    <Image alt="tuple" layout='fill' objectFit='contain'  src={"http://drive.google.com/uc?export=view&id=1J_PzNcWGVCu5X5twckcaop6gCmBf3LW5"}></Image>
                  </div>
                </div>
                <div className="col-span-1 mt-5 flex justify-center md:col-span-2 lg:col-span-1">
                <div className="h-16 w-40 relative mr-7 ml-7 cursor-pointer grayscale opacity-80 hover:opacity-100 hover:grayscale-0">
                    <Image alt="tuple" layout='fill' objectFit='contain'  src={"https://forkast.news/wp-content/uploads/2021/12/ethereum-name-service-ens-logo-vector-1.png"}></Image>
                  </div>
                </div>
                <div className="col-span-2 mt-5 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <div className="h-16 w-48 relative mr-7 ml-7 cursor-pointer grayscale opacity-80 hover:opacity-100 hover:grayscale-0">
                    <Image alt="tuple" layout='fill' objectFit='contain'  src={"https://www.coywolf.news/wp-content/uploads/2021/04/ipfs-logo.webp"}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;