
export default function BlogpostLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <header>
            <img src="../randomShit/katt.jpg" alt="" />
        </header>
        <nav> hej hej navbar</nav>
        
        {children}
      </section>
    )
  }




