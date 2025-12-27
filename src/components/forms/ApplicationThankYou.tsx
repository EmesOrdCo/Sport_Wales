'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface ApplicationThankYouProps {
  applicationType?: 'grant' | 'general';
}

export function ApplicationThankYou({ applicationType = 'grant' }: ApplicationThankYouProps) {
  const locale = useLocale();
  const isWelsh = locale === 'cy';

  return (
    <div className="bg-[#B91C3C]/10 border border-[#B91C3C]/20 rounded-2xl p-8 lg:p-10 text-center">
      <div className="w-16 h-16 rounded-full bg-[#B91C3C] mx-auto mb-6 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0F172A] mb-4">
        {isWelsh 
          ? 'Diolch i chi am eich cais' 
          : 'Thank you for your application'}
      </h2>

      {applicationType === 'grant' && (
        <>
          <p className="text-lg text-[#64748B] mb-6 leading-relaxed max-w-2xl mx-auto">
            {isWelsh
              ? 'Bydd eich cais am grant gan Chwaraeon Cymru yn cael ei asesu yn awr a byddwn yn cysylltu â chi cyn gynted ag y bydd penderfyniad wedi cael ei wneud.'
              : 'Your application for a Sport Wales grant will now be assessed, and we will contact you as soon as a decision has been made.'}
          </p>
          <p className="text-[#64748B] mb-8 leading-relaxed max-w-2xl mx-auto">
            {isWelsh
              ? 'Mae holl grantiau Chwaraeon Cymru yn cael eu darparu drwy gefnogaeth ariannol gan Lywodraeth Cymru a\'r Loteri Genedlaethol.'
              : 'All Sport Wales grants are provided through the financial support of Welsh Government and the National Lottery.'}
          </p>

          <div className="max-w-xl mx-auto">
            <p className="text-lg font-semibold text-[#0F172A] mb-4">
              {isWelsh ? 'Efallai bod gennych chi ddiddordeb yn y canlynol hefyd:' : 'You might also be interested in:'}
            </p>
            <Link
              href="/club-support"
              className="inline-flex items-center gap-2 text-[#B91C3C] font-semibold hover:underline text-lg"
            >
              {isWelsh
                ? 'Dyma ganllawiau a chefnogaeth ar gyfer clybiau chwaraeon yng Nghymru.'
                : 'Here\'s guidance and support for sports clubs in Wales.'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </>
      )}

      {applicationType === 'general' && (
        <p className="text-lg text-[#64748B] mb-6 leading-relaxed max-w-2xl mx-auto">
          {isWelsh
            ? 'Byddwn yn ymateb i\'ch cais cyn gynted â phosibl.'
            : 'We will respond to your application as soon as possible.'}
        </p>
      )}
    </div>
  );
}

