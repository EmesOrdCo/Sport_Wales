import { setRequestLocale, getTranslations } from 'next-intl/server';
import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  return {
    title: isWelsh ? 'Polisi Preifatrwydd | Chwaraeon Cymru' : 'Privacy Policy | Sport Wales',
    description: isWelsh
      ? 'Darllenwch ein polisi preifatrwydd i ddeall sut rydym yn trin eich data personol.'
      : 'Read our privacy policy to understand how we handle your personal data.',
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Polisi Preifatrwydd' : 'Privacy Policy', url: `https://www.sport.wales/${locale}/privacy-policy` },
  ];

  // Privacy policy sections matching real Sport Wales structure
  const sections = [
    {
      id: 'data-protection-principles',
      title: isWelsh 
        ? 'Adran 1 - Egwyddorion Diogelu Data Chwaraeon Cymru'
        : 'Section 1 - Sport Wales\' Data Protection Principles',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu ein hegwyddorion diogelu data, pwy ydym ni, a sut i gysylltu â ni ynghylch materion preifatrwydd.'
        : 'This section covers our data protection principles, who we are, and how to contact us regarding privacy matters.',
    },
    {
      id: 'website-users',
      title: isWelsh 
        ? 'Adran 2 - Gwybodaeth y gallwn ei chasglu gennych pan fyddwch yn defnyddio ein Gwefannau neu Wasanaethau Ar-lein'
        : 'Section 2 - Information we may collect from you when you use our Websites or Online Services',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu sut rydym yn defnyddio gwybodaeth ymwelwyr â\'n gwefan a defnyddwyr ein gwasanaethau ar-lein.'
        : 'This section covers how we use the information of visitors to our website and users of our online services.',
    },
    {
      id: 'sport-centre-customers',
      title: isWelsh 
        ? 'Adran 3 - Cwsmeriaid ein Canolfan Chwaraeon'
        : 'Section 3 - Customers of our Sport Centre',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu sut rydym yn defnyddio gwybodaeth cwsmeriaid sy\'n defnyddio Canolfan Genedlaethol Chwaraeon Cymru.'
        : 'This section covers how we use the information of customers who use the Sport Wales National Centre.',
    },
    {
      id: 'sport-sector-members',
      title: isWelsh 
        ? 'Adran 4 - Aelodau o glybiau chwaraeon neu gyrff, y sector chwaraeon a\'r rhai sy\'n helpu i gefnogi\'r sector chwaraeon'
        : 'Section 4 - Members of sport clubs or bodies, the sport sector & those helping to support the sport sector',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu sut rydym yn defnyddio gwybodaeth aelodau\'r sector chwaraeon ehangach.'
        : 'This section covers how we use the information of members of the wider sports sector.',
    },
    {
      id: 'job-applicants',
      title: isWelsh 
        ? 'Adran 5 - Ymgeiswyr am Swyddi Chwaraeon Cymru'
        : 'Section 5 - Sport Wales Job Applicants',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu gwybodaeth a gesglir yn ystod y broses recriwtio.'
        : 'This section covers information collected during the recruitment process.',
    },
    {
      id: 'athletes',
      title: isWelsh 
        ? 'Adran 6 - Athletwyr sy\'n defnyddio gwasanaethau Sefydliad Chwaraeon Cymru'
        : 'Section 6 - Athletes using the services of the Welsh Institute of Sport',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu gwybodaeth a gesglir ar gyfer ein rhaglenni cefnogi athletwyr.'
        : 'This section covers information collected for our athlete support programmes.',
    },
    {
      id: 'grant-recipients',
      title: isWelsh 
        ? 'Adran 7 - Derbynwyr ac Ymgeiswyr Grantiau'
        : 'Section 7 - Grant Recipients and Applicants',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu gwybodaeth a gesglir ar gyfer ein rhaglenni cyllid.'
        : 'This section covers information we collect for our funding programmes.',
    },
    {
      id: 'article-features',
      title: isWelsh 
        ? 'Adran 8 - Unigolion sy\'n ymddangos yn ein herthyglau neu gylchlythyrau'
        : 'Section 8 - Individuals who feature in our articles or newsletters',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu gwybodaeth a gesglir yn ystod y broses gyfathrebu.'
        : 'This section covers information collected during the communications process.',
    },
    {
      id: 'complaints-enquiries',
      title: isWelsh 
        ? 'Adran 9 - Unigolion sy\'n cysylltu â ni gyda chwynion neu ymholiadau'
        : 'Section 9 - Individuals who contact us with complaints or enquiries',
      description: isWelsh
        ? 'Mae\'r adran hon yn edrych ar wybodaeth a ddefnyddir pan fyddwch yn cysylltu â ni.'
        : 'This section looks at information used when you contact us.',
    },
    {
      id: 'cctv',
      title: isWelsh 
        ? 'Adran 10 - Unigolion a recordir ar TCC'
        : 'Section 10 - Individuals recorded on CCTV',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu sut rydym yn defnyddio ein ffilmiau TCC.'
        : 'This section covers how we use our CCTV footage.',
    },
    {
      id: 'newsletter-subscribers',
      title: isWelsh 
        ? 'Adran 11 - Unigolion sy\'n tanysgrifio i\'n cylchlythyrau neu ddiweddariadau'
        : 'Section 11 - Individuals who subscribe to our newsletters or updates',
      description: isWelsh
        ? 'Mae\'r adran hon yn cwmpasu gwybodaeth a ddefnyddir ar gyfer cyfathrebu hyrwyddol.'
        : 'This section covers information used for promotional communications.',
    },
  ];

  const content = isWelsh ? (
    <>
      <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-8 border border-[#E2E8F0]">
        <h2 className="text-xl font-display font-bold text-[#0F172A] mb-2">
          Trosolwg o&apos;r Polisi Preifatrwydd
        </h2>
        <p className="text-[#64748B]">
          Mae Chwaraeon Cymru (Cyngor Chwaraeon Cymru) wedi ymrwymo i ddiogelu eich preifatrwydd. 
          Mae&apos;r polisi preifatrwydd hwn wedi&apos;i strwythuro i roi gwybodaeth glir i chi am sut 
          rydym yn trin eich data personol yn dibynnu ar sut rydych chi&apos;n rhyngweithio â ni.
        </p>
      </div>

      <h2>Adrannau&apos;r Polisi</h2>
      <p className="mb-6">
        Cliciwch ar unrhyw adran isod i ddysgu sut rydym yn prosesu eich data personol:
      </p>

      <div className="grid gap-4 mb-8">
        {sections.map((section) => (
          <a 
            key={section.id}
            href={`#${section.id}`}
            className="block p-4 rounded-xl border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-[#0F172A] mb-1">{section.title}</h3>
            <p className="text-sm text-[#64748B]">{section.description}</p>
          </a>
        ))}
      </div>

      <hr className="my-8" />

      <section id="data-protection-principles">
        <h2>{sections[0].title}</h2>
        <h3>Pwy Ydym Ni</h3>
        <p>
          Mae Chwaraeon Cymru (Cyngor Chwaraeon Cymru) yn sefydliad a grëwyd gan Siarter Frenhinol 
          ar 4 Chwefror 1972. Ni yw&apos;r sefydliad cenedlaethol sy&apos;n gyfrifol am ddatblygu a 
          hyrwyddo chwaraeon a gweithgarwch corfforol yng Nghymru.
        </p>
        <p><strong>Cyfeiriad Cofrestredig:</strong></p>
        <p>
          Canolfan Genedlaethol Chwaraeon Cymru<br />
          Gerddi Sophia<br />
          Caerdydd, CF11 9SW
        </p>

        <h3>Ein Hegwyddorion Diogelu Data</h3>
        <p>Rydym wedi ymrwymo i:</p>
        <ul>
          <li>Prosesu data personol yn gyfreithlon, yn deg ac yn dryloyw</li>
          <li>Casglu data at ddibenion penodol, eglur a chyfreithlon yn unig</li>
          <li>Sicrhau bod data yn gywir ac wedi&apos;i ddiweddaru</li>
          <li>Cadw data am y cyfnod sy&apos;n angenrheidiol yn unig</li>
          <li>Sicrhau diogelwch priodol data personol</li>
        </ul>

        <h3>Cysylltu â Ni</h3>
        <p>
          I gysylltu â ni ynghylch materion preifatrwydd neu i arfer eich hawliau diogelu data:
        </p>
        <p>
          <strong>E-bost:</strong> <a href="mailto:info@sport.wales">info@sport.wales</a><br />
          <strong>Ffôn:</strong> 0300 300 3111
        </p>
      </section>

      <hr className="my-8" />

      <section id="website-users">
        <h2>{sections[1].title}</h2>
        <p>
          Pan fyddwch yn ymweld â&apos;n gwefan, gallwn gasglu:
        </p>
        <ul>
          <li><strong>Gwybodaeth dechnegol:</strong> Cyfeiriad IP, math o borwr, gosodiadau iaith, system weithredu</li>
          <li><strong>Gwybodaeth ddefnydd:</strong> Tudalennau a ymwelwyd, amser a dreuliwyd, dolenni a gliciwyd</li>
          <li><strong>Cwcis:</strong> Gweler ein <Link href="/cookie-policy">Polisi Cwcis</Link> am fanylion</li>
        </ul>
        <p>
          Defnyddir y wybodaeth hon i wella perfformiad ein gwefan a&apos;ch profiad defnyddiwr.
        </p>
      </section>

      <hr className="my-8" />

      <section id="sport-centre-customers">
        <h2>{sections[2].title}</h2>
        <p>
          Os ydych yn gwsmer yng Nghanolfan Genedlaethol Chwaraeon Cymru, gallwn gasglu:
        </p>
        <ul>
          <li>Gwybodaeth gyswllt (enw, cyfeiriad e-bost, rhif ffôn)</li>
          <li>Manylion aelodaeth a thanysgrifiadau</li>
          <li>Gwybodaeth talu</li>
          <li>Dewisiadau gweithgaredd a defnydd cyfleusterau</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="sport-sector-members">
        <h2>{sections[3].title}</h2>
        <p>
          Os ydych yn aelod o glwb chwaraeon, corff rheoli cenedlaethol, neu&apos;n gweithio yn y 
          sector chwaraeon yng Nghymru, gallwn gasglu gwybodaeth amdanoch i:
        </p>
        <ul>
          <li>Gefnogi datblygiad chwaraeon yn eich ardal</li>
          <li>Ddarparu hyfforddiant ac adnoddau</li>
          <li>Gyfathrebu cyfleoedd cyllid</li>
          <li>Rannu newyddion a diweddariadau perthnasol</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="job-applicants">
        <h2>{sections[4].title}</h2>
        <p>
          Os byddwch yn gwneud cais am swydd gyda Chwaraeon Cymru, byddwn yn casglu:
        </p>
        <ul>
          <li>Gwybodaeth gyswllt</li>
          <li>CV a llythyr eglurhaol</li>
          <li>Hanes cyflogaeth ac addysg</li>
          <li>Geirdaon</li>
          <li>Gwybodaeth am yr hawl i weithio yn y DU</li>
        </ul>
        <p>
          Cedwir data ymgeiswyr aflwyddiannus am 12 mis cyn ei ddinistrio&apos;n ddiogel.
        </p>
      </section>

      <hr className="my-8" />

      <section id="athletes">
        <h2>{sections[5].title}</h2>
        <p>
          Os ydych yn athletwr sy&apos;n derbyn cefnogaeth gan Sefydliad Chwaraeon Cymru, gallwn gasglu:
        </p>
        <ul>
          <li>Gwybodaeth gyswllt a manylion personol</li>
          <li>Data perfformiad a hyfforddiant</li>
          <li>Gwybodaeth feddygol ac iechyd (gyda chydsyniad)</li>
          <li>Gwybodaeth am gefnogaeth ariannol</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="grant-recipients">
        <h2>{sections[6].title}</h2>
        <p>
          Os ydych yn gwneud cais am gyllid gan Chwaraeon Cymru (e.e. Cronfa Cymru Actif), byddwn yn casglu:
        </p>
        <ul>
          <li>Gwybodaeth am eich sefydliad</li>
          <li>Manylion cyswllt</li>
          <li>Gwybodaeth ariannol</li>
          <li>Manylion y prosiect</li>
          <li>Adroddiadau cynnydd a chanlyniadau</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="article-features">
        <h2>{sections[7].title}</h2>
        <p>
          Os ydych yn ymddangos mewn erthygl, astudiaeth achos, neu gylchlythyr Chwaraeon Cymru, 
          byddwn yn gofyn am eich caniatâd i ddefnyddio:
        </p>
        <ul>
          <li>Eich enw a&apos;ch delwedd</li>
          <li>Dyfyniadau a straeon</li>
          <li>Ffotograffau a fideos</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="complaints-enquiries">
        <h2>{sections[8].title}</h2>
        <p>
          Pan fyddwch yn cysylltu â ni gyda chwestiwn neu gŵyn, byddwn yn cofnodi:
        </p>
        <ul>
          <li>Eich manylion cyswllt</li>
          <li>Natur eich ymholiad</li>
          <li>Ein hymatebion a&apos;n camau gweithredu</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="cctv">
        <h2>{sections[9].title}</h2>
        <p>
          Mae gennym systemau TCC yng Nghanolfan Genedlaethol Chwaraeon Cymru at ddibenion 
          diogelwch a diogeledd. Cedwir y ffilmiau am gyfnod cyfyngedig ac fe&apos;u defnyddir 
          yn unol â&apos;r gyfraith.
        </p>
      </section>

      <hr className="my-8" />

      <section id="newsletter-subscribers">
        <h2>{sections[10].title}</h2>
        <p>
          Os ydych wedi tanysgrifio i&apos;n cylchlythyrau, byddwn yn defnyddio eich cyfeiriad e-bost i:
        </p>
        <ul>
          <li>Anfon newyddion a diweddariadau am chwaraeon yng Nghymru</li>
          <li>Rannu cyfleoedd cyllid</li>
          <li>Rhoi gwybod am ddigwyddiadau</li>
        </ul>
        <p>
          Gallwch ddad-danysgrifio unrhyw bryd drwy glicio&apos;r ddolen yn ein e-byst.
        </p>
      </section>

      <hr className="my-8" />

      <h2>Eich Hawliau</h2>
      <p>O dan GDPR y DU, mae gennych yr hawliau canlynol:</p>
      <ul>
        <li><strong>Hawl mynediad:</strong> Cael gwybod pa ddata sydd gennym amdanoch</li>
        <li><strong>Hawl i gywiro:</strong> Cywiro gwybodaeth anghywir</li>
        <li><strong>Hawl i ddileu:</strong> Gofyn am ddileu eich data</li>
        <li><strong>Hawl i gyfyngu:</strong> Cyfyngu ar sut rydym yn defnyddio eich data</li>
        <li><strong>Hawl i gludadwyedd data:</strong> Derbyn eich data mewn fformat strwythuredig</li>
        <li><strong>Hawl i wrthwynebu:</strong> Gwrthwynebu prosesu penodol</li>
      </ul>

      <h2>Cwynion</h2>
      <p>
        Os oes gennych gŵyn am sut rydym yn trin eich data, cysylltwch â ni yn gyntaf ar{' '}
        <a href="mailto:info@sport.wales">info@sport.wales</a>. Os nad ydych yn fodlon â&apos;n 
        hymateb, gallwch gysylltu â Swyddfa&apos;r Comisiynydd Gwybodaeth (ICO) yn{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>
    </>
  ) : (
    <>
      <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-8 border border-[#E2E8F0]">
        <h2 className="text-xl font-display font-bold text-[#0F172A] mb-2">
          Privacy Policy Overview
        </h2>
        <p className="text-[#64748B]">
          Sport Wales (The Sports Council for Wales) is committed to protecting your privacy. 
          This privacy policy is structured to give you clear information about how we handle 
          your personal data depending on how you interact with us.
        </p>
      </div>

      <h2>Policy Sections</h2>
      <p className="mb-6">
        Click on any section below to learn how we process your personal data:
      </p>

      <div className="grid gap-4 mb-8">
        {sections.map((section) => (
          <a 
            key={section.id}
            href={`#${section.id}`}
            className="block p-4 rounded-xl border border-[#E2E8F0] hover:border-[#B91C3C] hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-[#0F172A] mb-1">{section.title}</h3>
            <p className="text-sm text-[#64748B]">{section.description}</p>
          </a>
        ))}
      </div>

      <hr className="my-8" />

      <section id="data-protection-principles">
        <h2>{sections[0].title}</h2>
        <h3>Who We Are</h3>
        <p>
          Sport Wales (The Sports Council for Wales) is an organisation created by Royal Charter 
          on 4 February 1972. We are the national organisation responsible for developing and 
          promoting sport and physical activity in Wales.
        </p>
        <p><strong>Registered Address:</strong></p>
        <p>
          Sport Wales National Centre<br />
          Sophia Gardens<br />
          Cardiff, CF11 9SW
        </p>

        <h3>Our Data Protection Principles</h3>
        <p>We are committed to:</p>
        <ul>
          <li>Processing personal data lawfully, fairly and transparently</li>
          <li>Collecting data only for specified, explicit and legitimate purposes</li>
          <li>Ensuring data is accurate and kept up to date</li>
          <li>Retaining data only for as long as necessary</li>
          <li>Ensuring appropriate security of personal data</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          To contact us regarding privacy matters or to exercise your data protection rights:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@sport.wales">info@sport.wales</a><br />
          <strong>Phone:</strong> 0300 300 3111
        </p>
      </section>

      <hr className="my-8" />

      <section id="website-users">
        <h2>{sections[1].title}</h2>
        <p>
          When you visit our website, we may collect:
        </p>
        <ul>
          <li><strong>Technical information:</strong> IP address, browser type, language settings, operating system</li>
          <li><strong>Usage information:</strong> Pages visited, time spent, links clicked</li>
          <li><strong>Cookies:</strong> See our <Link href="/cookie-policy">Cookie Policy</Link> for details</li>
        </ul>
        <p>
          This information is used to improve our website performance and your user experience.
        </p>
      </section>

      <hr className="my-8" />

      <section id="sport-centre-customers">
        <h2>{sections[2].title}</h2>
        <p>
          If you are a customer at the Sport Wales National Centre, we may collect:
        </p>
        <ul>
          <li>Contact information (name, email address, phone number)</li>
          <li>Membership and subscription details</li>
          <li>Payment information</li>
          <li>Activity preferences and facility usage</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="sport-sector-members">
        <h2>{sections[3].title}</h2>
        <p>
          If you are a member of a sports club, national governing body, or work in the 
          sport sector in Wales, we may collect information about you to:
        </p>
        <ul>
          <li>Support sport development in your area</li>
          <li>Provide training and resources</li>
          <li>Communicate funding opportunities</li>
          <li>Share relevant news and updates</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="job-applicants">
        <h2>{sections[4].title}</h2>
        <p>
          If you apply for a job with Sport Wales, we will collect:
        </p>
        <ul>
          <li>Contact information</li>
          <li>CV and cover letter</li>
          <li>Employment and education history</li>
          <li>References</li>
          <li>Right to work in the UK information</li>
        </ul>
        <p>
          Unsuccessful applicant data is retained for 12 months before being securely destroyed.
        </p>
      </section>

      <hr className="my-8" />

      <section id="athletes">
        <h2>{sections[5].title}</h2>
        <p>
          If you are an athlete receiving support from the Welsh Institute of Sport, we may collect:
        </p>
        <ul>
          <li>Contact information and personal details</li>
          <li>Performance and training data</li>
          <li>Medical and health information (with consent)</li>
          <li>Financial support information</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="grant-recipients">
        <h2>{sections[6].title}</h2>
        <p>
          If you apply for funding from Sport Wales (e.g. Be Active Wales Fund), we will collect:
        </p>
        <ul>
          <li>Information about your organisation</li>
          <li>Contact details</li>
          <li>Financial information</li>
          <li>Project details</li>
          <li>Progress reports and outcomes</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="article-features">
        <h2>{sections[7].title}</h2>
        <p>
          If you feature in a Sport Wales article, case study, or newsletter, we will ask 
          for your consent to use:
        </p>
        <ul>
          <li>Your name and image</li>
          <li>Quotes and stories</li>
          <li>Photographs and videos</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="complaints-enquiries">
        <h2>{sections[8].title}</h2>
        <p>
          When you contact us with a question or complaint, we will record:
        </p>
        <ul>
          <li>Your contact details</li>
          <li>The nature of your enquiry</li>
          <li>Our responses and actions taken</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section id="cctv">
        <h2>{sections[9].title}</h2>
        <p>
          We operate CCTV systems at the Sport Wales National Centre for security and 
          safety purposes. Footage is retained for a limited period and used in 
          accordance with the law.
        </p>
      </section>

      <hr className="my-8" />

      <section id="newsletter-subscribers">
        <h2>{sections[10].title}</h2>
        <p>
          If you have subscribed to our newsletters, we will use your email address to:
        </p>
        <ul>
          <li>Send news and updates about sport in Wales</li>
          <li>Share funding opportunities</li>
          <li>Notify you about events</li>
        </ul>
        <p>
          You can unsubscribe at any time by clicking the link in our emails.
        </p>
      </section>

      <hr className="my-8" />

      <h2>Your Rights</h2>
      <p>Under UK GDPR, you have the following rights:</p>
      <ul>
        <li><strong>Right of access:</strong> Find out what data we hold about you</li>
        <li><strong>Right to rectification:</strong> Correct inaccurate information</li>
        <li><strong>Right to erasure:</strong> Request deletion of your data</li>
        <li><strong>Right to restriction:</strong> Limit how we use your data</li>
        <li><strong>Right to data portability:</strong> Receive your data in a structured format</li>
        <li><strong>Right to object:</strong> Object to certain processing</li>
      </ul>

      <h2>Complaints</h2>
      <p>
        If you have a complaint about how we handle your data, please contact us first at{' '}
        <a href="mailto:info@sport.wales">info@sport.wales</a>. If you are not satisfied with 
        our response, you can contact the Information Commissioner&apos;s Office (ICO) at{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, url: b.url || '' }))}
      />
      <LegalPageLayout
        title={isWelsh ? 'Polisi Preifatrwydd' : 'Privacy Policy'}
        lastUpdated="December 2025"
        breadcrumbs={breadcrumbs}
        isWelsh={isWelsh}
      >
        {content}
      </LegalPageLayout>
    </>
  );
}
