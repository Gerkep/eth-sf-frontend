export default function UserMessage() {

    return (
        <div className="w-full flex justify-end">
            <div className="flex w-11/12 lg:w-1/3 items-end space-x-4 py-2 lg:py-6">
                <div className="min-w-0 flex-1 justify-end">
                <div className="relative inset-x-0 flex justify-end pt-4">
                    <div className="relative lg:w-full bg-gray-400 rounded-xl text-sm p-3 text-white">
                        <p>Hello</p>
                    </div>
                    <div className="flex-shrink-0 pl-4">
                        <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        alt="pfp"
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  