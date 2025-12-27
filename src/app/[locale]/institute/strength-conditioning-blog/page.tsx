'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function StrengthConditioningBlogPage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  return (
    <>
      {/* Simple Header */}
      <div className="bg-[#123F56] pt-24 pb-8">
        <div className="container">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white">{isWelsh ? 'Hafan' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link href="/institute" className="hover:text-white">{isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'The Sport Wales Institute'}</Link>
            <span className="mx-2">/</span>
            <Link href="/institute/strength-conditioning-course" className="hover:text-white">{isWelsh ? 'Cryfder a Chyflyriad' : 'Strength and Conditioning'}</Link>
          </nav>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            
            <p className="text-[#475569] mb-6">
              <strong>Seb Moran – Sport Wales' Lead Strength & Conditioning Coach – blogs about a brand-new qualification for those working with the next generation of Welsh athletes.</strong>
            </p>

            <p className="text-[#475569] mb-6">
              Are you a bit frustrated that your up-and-coming athletes, not yet at the elite level of sport, don't have access to top quality support?
            </p>

            <p className="text-[#475569] mb-6">
              Here at Sport Wales, we are trying to change that so that every child has the support needed to reach their potential.
            </p>

            <p className="text-[#475569] mb-6">
              We're launching a brand-new course – an entry level, vocational qualification in strength & conditioning, aimed at sports coaches, PE teachers, and others working with young athletes. And I think it has huge potential to make a big difference to Welsh sport.
            </p>

            <h2 className="text-xl font-display font-bold text-[#123F56] mb-4 mt-10">Why is this strength & conditioning course needed?</h2>

            <p className="text-[#475569] mb-6">
              As elite level sport becomes more and more demanding, we have seen an increase in the need for specific expertise – with most organisations now employing specialist staff to work alongside sports coaches. And whilst this has benefitted the top tier of sport, it has perhaps come at the expense of the younger generation.
            </p>

            <p className="text-[#475569] mb-6">
              Teaching athletes how to move their body effectively – jumping & landing, balancing, sprinting and changing direction – is often seen as secondary to learning sport-specific techniques and tactics. Most sports coaches now see movement and physical training as the domain of the strength and conditioning experts.
            </p>

            <p className="text-[#475569] mb-6">
              However, at the pathway and grassroots level of sport – where there is no funding for specialist staff - this presents a problem. The negative influence of video games and social media on the athleticism of today's generation means that young people are now transitioning to the elite level without the movement skills they need to thrive.
            </p>

            <h2 className="text-xl font-display font-bold text-[#123F56] mb-4 mt-10">Why is this important now? The challenges facing our athletes…</h2>

            <p className="text-[#475569] mb-6">
              As the demands of the elite level game are putting increasing pressure on coaches and athletes to specialise earlier and to train harder and for longer, injury and drop-out rates are at an all-time high.
            </p>

            <p className="text-[#475569] mb-6">
              Young, female sportswomen, in particular, are at a bigger risk of career-threatening injuries such as ACL tears - one of the leading causes of drop-out in sport.
            </p>

            <p className="text-[#475569] mb-6">
              We need to make sure the next generation of athletes receive the right level of support. And we can do that by giving coaches in the pathway the skills and confidence to provide that support.
            </p>

            <h2 className="text-xl font-display font-bold text-[#123F56] mb-4 mt-10">So, what is the course?</h2>

            <p className="text-[#475569] mb-6">
              It's a level 3, vocational qualification that has been established by the UK Strength & Conditioning Association. Aimed at sports coaches, PE teachers, and others working with young athletes – it allows the successful candidate to be fully insured to deliver strength & conditioning training in order to improve performance and prevent injury.
            </p>

            <p className="text-[#475569] mb-6">
              I was sceptical at first, given the fitness industry's track record of offering weekend courses for trainers to "tick the box" and receive their certificate of expertise. But I quickly changed my mind.
            </p>

            <p className="text-[#475569] mb-6">
              Not only are you expected to complete practical assessments, you must also deliver a 12-week program and keep a "portfolio of practice" in which you reflect on your strengths, weaknesses, and learn through experience. It goes far beyond the theoretical nature of most qualifications.
            </p>

            <p className="text-[#475569] mb-6">
              We want to make this course affordable and inclusive which is why we have discounted it to a cost of £600, while other training providers are offering it from upwards of £1250. Meanwhile, an equivalent level 3 personal trainer course, without any focus on sportspeople, can be found for £995. An inclusive sports system is a priority for us at Sport Wales, and it is hoped that this discount will make the course far more accessible for organisations or individuals that may not be able to afford qualifications elsewhere.
            </p>

            <p className="text-[#475569] mb-6">
              After a successful pilot project, I'm really pleased that together with the UKSCA we can now offer this qualification to sports coaches, PE teachers, and other leaders that are helping pave the way for the athletes of tomorrow.
            </p>

            <h2 className="text-xl font-display font-bold text-[#123F56] mb-4 mt-10">How can I register for the strength & conditioning qualification?</h2>

            <p className="text-[#475569] mb-6">
              If you'd like to find out more about the qualification and how it could benefit you or your organisation, please email <a href="mailto:seb.moran@sport.wales" className="text-[#E11D2E] hover:underline">seb.moran@sport.wales</a>
            </p>

            <p className="text-[#475569] mb-12">
              I'd also be grateful if you can share with your networks so we can spread the word right across Wales.
            </p>

            {/* Back link */}
            <div className="pt-8 border-t border-[#E2E8F0]">
              <Link 
                href="/institute/strength-conditioning-course" 
                className="inline-flex items-center gap-2 text-[#E11D2E] font-semibold hover:underline"
              >
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Back to Strength & Conditioning Course
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

