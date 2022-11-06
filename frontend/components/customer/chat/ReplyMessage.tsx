import Image from 'next/image'

export default function ReplyMessage() {

  return (
    <div className="flex w-11/12 lg:w-1/3 items-start space-x-4 py-2 lg:py-6">
      <div className="min-w-0 flex-1">
        <div className="relative inset-x-0 flex justify-start pt-4">
            <div className="flex-shrink-0 pr-4">
              <div className="inline-block h-10 w-10 rounded-full relative">
              <Image alt="pfp" layout='fill' objectFit='contain'  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"></Image>
              </div>
            </div>
            <div className="relative max-w-xl lg:w-full bg-indigo-500 rounded-xl p-3 text-sm text-white">
                <p>Hello it&apos;s my message fl sghio padf gioe sjeprstg erh psgs erouh gseru h paerghuigh</p>
            </div>
          </div>
      </div>
    </div>
  )
}
