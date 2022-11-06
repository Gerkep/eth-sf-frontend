import { people } from "../../pages/reviews/[storeId]"
import Link from "next/link";
import Image from "next/image";

export default function Stores() {
  return (
    <div>
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {people.map((person:any, index: any) => (
            <li key={person.handle} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full relative overflow-hidden">
                    <Image alt="image" layout='fill' objectFit='contain'  src={person.imageUrl}></Image>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                  <p className="truncate text-sm text-gray-500">{person.handle} reviews</p>
                </div>
                <div>
                  <Link className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50" href={`/reviews/${index}`}>
                    See reviews
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}