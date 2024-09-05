const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h3 className='heading text-center'>Contact Us</h3>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Got a technical issue? Want to send feature about beta feature? Let us know.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='form__label'>
              Your Email
            </label>
            <input type='email' id='email' className='form__input mt-4' placeholder='example@gmail.com' />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
