import { Oswald } from 'next/font/google'
import { Questrial } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin']
})

const questrial = Questrial({
  weight: '400',
  subsets: ['latin']
})

export default function Reviews(){

    return(
        <div className="flex flex-col items-center text-center justify-center p-4 mt-16" id="reviews">
            <h2 className={`font-bold text-black text-3xl md:text-4xl mb-4 ${oswald.className}`}>Our Customer Say</h2>
            <p className={`md:w-[700px] ${questrial.className}`}>Each car has its own unique characteristics. Due to special occasions, many people desire a blast on their special day. There are others who plan a special weekend.</p>
        
        <div className="flex flex-col md:grid md:grid-cols-3">

            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className={`${questrial.className}`}>
            Great experience with awesome Audi RS3 , highly recommend.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://i.ibb.co/x6Qz8wG/56852907-1070176876522333-4866223368279425024-n.jpg"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className={`font-semibold text-gray-900 ${oswald.className}`}>Zain Bash</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Facebook</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p className={`${questrial.className}`}>
            Hired 2 cars, s3 saloon and rs3 and absolutely loved it. Would deffo recommend them, enjoyed my birthday and made it special.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://i.ibb.co/j8zCnNx/374313021-6721919397865821-2118429526086981797-n.jpg"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className={`font-semibold text-gray-900 ${oswald.className}`}>Jack Yates</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Facebook</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p className={`${questrial.className}`}>
            Hired 2 cars from Car Mode , very happy and highly recommend. Car was clean and in excellent condition.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://i.ibb.co/FhbtccV/348311890-3493958224256715-8411680942243435601-n.jpg"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className={`font-semibold text-gray-900 ${oswald.className}`}>Ismail Jhangir</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Facebook</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    
        </div>
        </div>
    )
}