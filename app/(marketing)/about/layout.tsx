
export default function AboutLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav> hej hej navbar</nav>
        <h1>This is inside the about page bro</h1>
        
        {children}
      </section>
    )
  }