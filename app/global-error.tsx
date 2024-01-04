'use client'

export default function GlobalError({
    error,
    reset,

}:{
    error: Error & { digest?: string }
    reset: () =>void
}) {
    return (
        <html>
            <body className="bg-red-600">
                <h2 className="text-white">Something Went Wrong!</h2>
                <button onClick={()=> reset()}> Try again</button>
            </body>
        </html>
    )
}