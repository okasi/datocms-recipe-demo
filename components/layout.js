export default function Layout({ children, props }) {
  return (
    <>
      <div className="min-h-screen max-w-screen overflow-x-hidden -mt-24" {...props}>
        <main>{children}</main>
      </div>
    </>
  )
}
