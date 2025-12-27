'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function StrengthConditioningCoursePage() {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#B91C3C] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#B91C3C] opacity-10 blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">{isWelsh ? 'Hafan' : 'Home'}</Link></li>
              <li>/</li>
              <li><Link href="/institute" className="hover:text-white transition-colors">{isWelsh ? 'Sefydliad Chwaraeon Cymru' : 'The Sport Wales Institute'}</Link></li>
              <li>/</li>
              <li><span className="text-white">{isWelsh ? 'Cryfder a Chyflyriad' : 'Strength and Conditioning'}</span></li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-display font-bold !text-white mb-4 leading-tight">
              {isWelsh
                ? 'Dewch yn hyfforddwr cryfder a chyflyriad cymwys – gwella eich gallu i wella galluoedd corfforol athletwyr'
                : 'Become a qualified strength & conditioning trainer – enhance your ability to improve athlete\'s physical capabilities'}
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120V60C360 20 720 0 1080 20C1260 30 1380 50 1440 60V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="prose prose-lg prose-slate max-w-none">
            
            {/* Course Title */}
            <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              UK Strength and Conditioning Association's Level 3 Strength and Conditioning (S&C) Trainer Award
            </h2>
            
            <p className="text-[#475569] mb-6">
              <strong>The UK Strength and Conditioning Association's Level 3 Strength and Conditioning (S&C) Trainer Award gives you a nationally recognised qualification and has been heavily subsidised by Sport Wales for coaches or PE teachers working in the Welsh Sporting System.</strong>
            </p>

            <p className="text-[#475569] mb-2">The course is:</p>
            <ul className="text-[#475569] mb-6 list-disc pl-6 space-y-1">
              <li>CIMPSA-endorsed</li>
              <li>Run by professional S&C coaches with experience working in 16 different sports at the elite level</li>
              <li>Includes ongoing mentorship with Sport Wales S&C staff</li>
              <li>Heavily subsidised by Sport Wales - £600 (instead of up to £1,500)</li>
              <li>Is suitable for coaches at all levels, PE teachers and other sports leaders</li>
            </ul>

            <p className="text-[#475569] mb-4">
              We are now running subsidised courses in both Cardiff and Carmarthen. You can apply for the Cardiff course, or apply for the Carmarthen course. <strong>Deadline to apply - July 25th 2025.</strong>
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#" className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors">
                Apply for the Cardiff course
              </a>
              <a href="#" className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-colors">
                Apply for the Carmarthen course
              </a>
            </div>

            <p className="text-[#64748B] mb-12">
              To speak to the course leader email <a href="mailto:strengthandconditioning@sport.wales" className="text-[#B91C3C] hover:underline">strengthandconditioning@sport.wales</a>
            </p>

            {/* What will I learn */}
            <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-4">What will I learn?</h2>
            
            <p className="text-[#475569] mb-4">
              As a S&C Trainer, you will be taught the skills required to be fully qualified to deliver physical training to athletes taking part in sport (all the way from grassroots to elite level) in order to improve their performance and prevent injuries.
            </p>

            <p className="text-[#475569] mb-4">This includes learning how to teach and plan sessions for the development of:</p>
            
            <ul className="text-[#475569] mb-6 list-disc pl-6 space-y-1">
              <li>Foundational movement skills (improving an athlete's ability to move their body efficiently and effectively)</li>
              <li>Energy systems (i.e. aerobic and anaerobic fitness)</li>
              <li>Strength and power</li>
              <li>Speed and agility</li>
            </ul>

            <p className="text-[#475569] mb-4">
              You will also be upskilled on the holistic nature of S&C coaching, including the underpinning science of training and planning as well as how to create an engaging and positive S&C environment.
            </p>

            <ul className="text-[#475569] mb-12 list-disc pl-6 space-y-2">
              <li><strong>Understanding the role of the S+C Trainer</strong> - Deliver appropriate 'performance led' S+C programmes across a diverse range of participants. Understanding when to refer.</li>
              <li><strong>Underpinning scientific basis of strength and conditioning</strong> - Apply the principles of training to deliver effective sessions.</li>
              <li><strong>Effective training</strong> - Demonstrate, describe and coach effective movement, progressing/regressing where appropriate.</li>
              <li><strong>Planning training programmes</strong> - Design and write medium term training plans based on a comprehensive needs analysis.</li>
              <li><strong>Understanding technical models</strong> - Observe, Coach and feedback movement based agreed technical models.</li>
              <li><strong>Effective coaching</strong> - Effectively engage, educate and communicate with participants across a wide background.</li>
            </ul>

            {/* Video placeholder */}
            <div className="aspect-video bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <svg className="w-16 h-16 text-[#94A3B8] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#64748B]">Play Video</p>
              </div>
            </div>
            <p className="text-sm text-[#64748B] italic mb-12">
              Accessibility Note. This film shows people on the Strength and Conditioning Level 3 Award at Sport Wales. It begins with course leader Seb Moran talking about the course, and then a number of the participants explain why they are taking part in the course. All speakers are in the gym venue with other participants in the background.
            </p>

            {/* What does the course entail */}
            <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-4">What does the course entail – what will be required of me?</h2>
            
            <p className="text-[#475569] mb-6">
              You will be required to complete 5 assessments. The first 3 assessments will be practical and completed at the face-to-face sessions with your peers on the course. Once you have completed these, you are required to deliver a 12-week program to someone outside your course. The final assessments will consist of creating a portfolio and presenting to your course leader whilst you plan, deliver, and reflect on the 12-week program.
            </p>

            <p className="text-[#475569] mb-2"><strong>Practical Assessment A</strong></p>
            <p className="text-[#475569] mb-6">Foundation movements coaching - coach a 20 minute session to a small group</p>

            <p className="text-[#475569] mb-2"><strong>Practical Assessment B</strong></p>
            <p className="text-[#475569] mb-6">Coaching safety in the gym - spotting and failing safely</p>

            <p className="text-[#475569] mb-2"><strong>Practical Assessment C</strong></p>
            <p className="text-[#475569] mb-6">Strength-based training assessment - coach a 40 minute session to an individual</p>

            <p className="text-[#475569] mb-2"><strong>Assessment D - Programming & Planning</strong></p>
            <p className="text-[#475569] mb-2">With a real life participant, carry out a consultation, needs analysis, performance testing, and design a 12-week programme.</p>
            <p className="text-[#475569] mb-6">You will then present this work to your assessor, 1-to-1 (can be done via Teams/Zoom).</p>

            <p className="text-[#475569] mb-2"><strong>Assessment E - Impact Assessment & Reflective Practice</strong></p>
            <p className="text-[#475569] mb-12">Deliver and submit evidence of programme changes, and reflective log. You will be required to present your reflections and complete an anatomy and physiology quiz.</p>

            {/* Time commitment */}
            <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-4">What is the time commitment?</h2>
            
            <p className="text-[#475569] mb-4">In person sessions:</p>

            <p className="text-[#475569] mb-2"><strong>Cardiff</strong></p>
            <ul className="text-[#475569] mb-6 list-disc pl-6 space-y-1">
              <li>20-21st September</li>
              <li>18-19 October</li>
              <li>8-9 November</li>
            </ul>

            <p className="text-[#475569] mb-2"><strong>Carmarthen</strong></p>
            <ul className="text-[#475569] mb-6 list-disc pl-6 space-y-1">
              <li>27-28 September</li>
              <li>25-26 October</li>
              <li>15-16 November</li>
            </ul>

            <p className="text-[#475569] mb-12">
              After this, all assessments will be online and flexible. You will need to commit to coaching a participant (this would ideally be an athlete you already coach, but could be a family member or friend taking part in any level of sport) through an S&C program and keep a comprehensive portfolio of your planning & delivery over a period of 12-weeks.
            </p>

            {/* FAQs */}
            <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">Do you cater for specific learning needs?</h3>
            <p className="text-[#475569] mb-8">
              Yes. Please let us know if you have any specific learning requirements or ongoing injuries which may impact your ability to take part in a practical session, and we will cater for these on your course.
            </p>

            <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">Will this allow me to be insured/covered to deliver in a gym-based environment?</h3>
            <p className="text-[#475569] mb-8">
              Yes! If you already work through a NGB or school, the qualification should allow you deliver S&C as part of your employment and be covered on their existing liability policy. You can also decide to take out private insurance if you would like to do your own private S&C work outside of your organisation.
            </p>

            <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">What if I can't make one of the weekend?</h3>
            <p className="text-[#475569] mb-12">
              Whilst we recommend attending all face-to-face days to get the most out of the course, you will still be able to complete the qualification if you cannot attend one of the days/weekends. You may need to complete some catch up independent work at home, or come in during a weekday if you miss one of the practical assessments.
            </p>

            {/* Blog link */}
            <div className="bg-[#F8FAFC] rounded-lg p-6 mb-8">
              <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2">Why has Sport Wales decided to launch this qualification?</h3>
              <p className="text-[#64748B] mb-4">Blog - Seb Moran on why this course is being delivered, why now, and how it's hoped it'll benefit the Welsh sport system</p>
              <Link href="/institute/strength-conditioning-blog" className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold hover:underline">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Institute */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container text-center">
          <Link
            href="/institute"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#B91C3C] text-white font-semibold hover:bg-[#991B1B] transition-colors"
          >
            Back to The Sport Wales Institute
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
