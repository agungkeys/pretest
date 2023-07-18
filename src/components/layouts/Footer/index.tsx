export default function Footer() {
  return (
    <section className="footer bg-secondary border-t dark:bg-skin-bgdark dark:border-opacity-10 dark:border-gray-100">
      <div className="container  mx-auto ">
        <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4 ">
          <div className="first">
            <p className="text-skin-white">Copyright Agung Kurniawan</p>
          </div>
          <div className="last float-right text-skin-white">
            <p>© 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}