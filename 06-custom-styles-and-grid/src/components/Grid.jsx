import React from 'react'

const Grid = () => {
    return (
        <div className='max-w-4xl mx-auto py-20 min-h-screen bg-gray-200 px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-fr'>

                <Card>
                    <CardTitle>LLM Models for the vibes</CardTitle>

                    <CardSubtitle>
                        Track real-time activity of agents with detailed records
                        of triggers, tools used, outcomes and timestamps.
                    </CardSubtitle>

                    <CardSkeleton>
                        <MainSkeleton />
                    </CardSkeleton>
                </Card>

                <Card>
                    <CardTitle>LLM Models for the vibes</CardTitle>

                    <CardSubtitle>
                        Track real-time activity of agents with detailed records
                        of triggers, tools used, outcomes and timestamps.
                    </CardSubtitle>

                    <CardSkeleton>
                        <div className='h-full w-full rounded-lg'></div>
                    </CardSkeleton>
                </Card>

                <Card className='lg:col-span-2'>
                    <CardTitle>LLM Models for the vibes</CardTitle>

                    <CardSubtitle>
                        Track real-time activity of agents with detailed records
                        of triggers, tools used, outcomes and timestamps.
                    </CardSubtitle>

                    <CardSkeleton>
                        <div className='[background-color:red] h-full w-full rounded-lg'></div>
                    </CardSkeleton>
                </Card>

            </div>
        </div>
    )
}

const Card = ({ children, className = '' }) => {
    return (
        <div
            className={`
                bg-white
                p-5
                rounded-2xl
                flex
                flex-col
                h-full
                min-h-[320px]
                sm:min-h-[360px]
                ${className}
            `}
        >
            {children}
        </div>
    )
}

const CardTitle = ({ children }) => {
    return (
        <h2 className='font-semibold text-lg tracking-tight'>
            {children}
        </h2>
    )
}

const CardSubtitle = ({ children }) => {
    return (
        <p className='text-sm sm:text-base text-neutral-500 mt-2 leading-relaxed'>
            {children}
        </p>
    )
}

const CardSkeleton = ({ children }) => {
    return (
        <div
            // style={{
            //     backgroundImage: 'radial-gradient(black 1px, transparent 1px)',
            //     backgroundSize: '10px 10px'
            // }}
            className='
                mt-5
                flex-1
                min-h-[180px]
                sm:min-h-[220px]

                bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]
                [background-size:10px_10px]

                mask-radial-from-50%
            '
        >
            {children}
        </div>
    )
}

const MainSkeleton = () => {

    const chat = [
        {
            role: 'user',
            text: 'Hello There!'
        },
        {
            role: 'assistant',
            text: 'Hello There! How can I help you today?'
        },
        {
            role: 'user',
            text: 'Can you please create a skeleton card for my project?'
        },
        {
            role: 'assistant',
            text: 'Nah, do it yourself!'
        },
    ]

    const UserMessage = ({ text }) => {
        return (
            <div className="flex justify-end items-start gap-2">

                <p className='text-sm text-white bg-blue-500 px-3 py-2 rounded-2xl max-w-[80%]'>
                    {text}
                </p>

                <div className="size-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shrink-0" />

            </div>
        )
    }

    const AIMessage = ({ text }) => {
        return (
            <div className="flex justify-start items-start gap-2">

                <div className="size-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0" />

                <p className='text-sm text-black bg-white border border-neutral-200 px-3 py-2 rounded-2xl max-w-[80%]'>
                    {text}
                </p>

            </div>
        )
    }

    return (
        <div className='h-full w-full rounded-xl border border-neutral-200 bg-white flex flex-col overflow-hidden'>

            <div className='flex-1 p-4 space-y-4 overflow-hidden'>

                {chat.map((message, index) => {
                    return message.role === 'user'
                        ? <UserMessage key={index} text={message.text} />
                        : <AIMessage key={index} text={message.text} />
                })}

            </div>

            <div className='border-t border-neutral-200 p-3 bg-white'>
                <div className='flex items-center gap-2 bg-neutral-100 rounded-xl px-3 py-2'>

                    <input
                        type="text"
                        placeholder='Type your message...'
                        className='
                            flex-1
                            bg-transparent
                            outline-none
                            text-sm
                            placeholder:text-neutral-400
                        '
                    />

                    <button className='bg-black text-white text-xs px-3 py-1.5 rounded-lg'>
                        Send
                    </button>

                </div>
            </div>

        </div>
    )
}


export default Grid