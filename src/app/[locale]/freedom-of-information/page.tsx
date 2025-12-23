import { setRequestLocale } from 'next-intl/server';
import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isWelsh = locale === 'cy';

  return {
    title: isWelsh
      ? 'Rhyddid Gwybodaeth | Chwaraeon Cymru'
      : 'Freedom of Information | Sport Wales',
    description: isWelsh
      ? 'Gwybodaeth am sut i wneud cais rhyddid gwybodaeth i Chwaraeon Cymru.'
      : 'Information about how to make a freedom of information request to Sport Wales.',
  };
}

export default async function FreedomOfInformationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Rhyddid Gwybodaeth' : 'Freedom of Information', url: `https://www.sport.wales/${locale}/freedom-of-information` },
  ];

  const content = isWelsh ? (
    <>
      <h2>Deddf Rhyddid Gwybodaeth</h2>
      <p>
        Daeth y Ddeddf Rhyddid Gwybodaeth i rym ym mis Ionawr 2005. Mae&apos;n rhoi hawl i&apos;r
        cyhoedd gael mynediad at wybodaeth a ddelir gan awdurdodau cyhoeddus, yn amodol ar rai
        eithriadau.
      </p>

      <h2>Eich Hawl i Wybodaeth</h2>
      <p>
        Gall unrhyw berson ofyn am wybodaeth yn ysgrifenedig gan Chwaraeon Cymru. Rhaid i ni
        ddarparu ymateb o fewn 20 diwrnod gwaith:
      </p>
      <ul>
        <li>darparu&apos;r wybodaeth y gofynnwyd amdani; neu</li>
        <li>
          cadarnhau ein bod yn dal y wybodaeth, ond ni allwn ei rhyddhau oherwydd ei bod yn dod o
          dan eithriad o dan y Ddeddf, gan gynnwys esboniad llawn o pam mae&apos;r eithriad yn
          berthnasol
        </li>
      </ul>

      <h2>Egluro Ceisiadau</h2>
      <p>
        Pan fo ymholiad yn aneglur neu&apos;n gyffredinol iawn, bydd Chwaraeon Cymru yn cysylltu
        â&apos;r ymholwr i egluro&apos;r cais; bydd y 20 diwrnod yn dechrau unwaith y derbynnir
        eglurder.
      </p>

      <h2>Mwy o Wybodaeth</h2>
      <p>
        Os hoffech gael mwy o wybodaeth am Ryddid Gwybodaeth, ewch i wefan{' '}
        <a
          href="https://ico.org.uk/your-data-matters/official-information/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swyddfa&apos;r Comisiynydd Gwybodaeth
        </a>
        .
      </p>

      <div className="bg-[var(--sw-gray-50)] rounded-xl p-6 my-8">
        <h2 className="mt-0">Gwneud Cais Rhyddid Gwybodaeth</h2>
        <p>
          Rydym yn darparu llawer iawn o wybodaeth ar y wefan hon. Cyn gofyn am wybodaeth, gwiriwch
          nad yw eisoes ar gael.
        </p>
        <p>Rydym yn cynhyrchu rhestr o gyhoeddiadau allweddol, sydd ar gael ar y wefan hon.</p>

        <h3>Trwy E-bost</h3>
        <p>
          Gallwch gyflwyno cais Rhyddid Gwybodaeth trwy e-bost:
          <br />
          <a href="mailto:foi@sport.wales" className="font-semibold">
            foi@sport.wales
          </a>
        </p>

        <h3>Trwy&apos;r Post</h3>
        <p>
          Fel arall, gallwch ysgrifennu at:
          <br />
          <strong>
            Chwaraeon Cymru
            <br />
            Gerddi Sophia
            <br />
            Caerdydd
            <br />
            CF11 9SW
          </strong>
        </p>
      </div>

      <h2>Ein Cyhoeddiadau</h2>
      <p>
        Rydym yn cyhoeddi ystod o ddogfennau a gwybodaeth yn rheolaidd, gan gynnwys:
      </p>
      <ul>
        <li>Adroddiadau Blynyddol a Chyfrifon</li>
        <li>Cynlluniau Strategol</li>
        <li>Papurau a Phenderfyniadau&apos;r Bwrdd</li>
        <li>Adroddiadau Ymchwil</li>
        <li>Polisïau a Gweithdrefnau</li>
      </ul>

      <h2>Ffioedd</h2>
      <p>
        Nid ydym yn codi tâl am y rhan fwyaf o geisiadau Rhyddid Gwybodaeth. Fodd bynnag, os yw cais
        yn debygol o gymryd mwy nag 18 awr o waith i&apos;w gwblhau, efallai y byddwn yn gofyn am ffi
        neu&apos;n gwrthod y cais.
      </p>

      <h2>Apelio</h2>
      <p>
        Os nad ydych yn fodlon â&apos;n hymateb i&apos;ch cais, gallwch ofyn am adolygiad mewnol.
        Os ydych yn dal yn anfodlon ar ôl yr adolygiad mewnol, gallwch gwyno i Swyddfa&apos;r
        Comisiynydd Gwybodaeth.
      </p>
    </>
  ) : (
    <>
      <h2>Freedom of Information Act</h2>
      <p>
        The Freedom of Information Act came into force in January 2005. It provides the public with
        a right of access to information held by public authorities, subject to some exemptions.
      </p>

      <h2>Your Right to Information</h2>
      <p>
        Any person can request information in writing from Sport Wales. We must provide a response
        within 20 working days:
      </p>
      <ul>
        <li>providing the requested information; or</li>
        <li>
          confirming that we hold the information, but are unable to release it because it falls
          under an exemption under the Act, including a full explanation of why the exemption
          applies
        </li>
      </ul>

      <h2>Clarifying Requests</h2>
      <p>
        Where an enquiry is unclear or very general, Sport Wales will contact the enquirer to
        clarify the request; the 20 days will commence once clarification is received.
      </p>

      <h2>More Information</h2>
      <p>
        If you wish to find out more about Freedom of Information, visit the{' '}
        <a
          href="https://ico.org.uk/your-data-matters/official-information/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Information Commissioner&apos;s website
        </a>
        .
      </p>

      <div className="bg-[var(--sw-gray-50)] rounded-xl p-6 my-8">
        <h2 className="mt-0">Making a Freedom of Information Request</h2>
        <p>
          We provide a large amount of information on this website. Before requesting information,
          please check that it is not already available.
        </p>
        <p>We produce a list of key publications, which is available on this website.</p>

        <h3>By Email</h3>
        <p>
          A Freedom of Information request can be submitted by email:
          <br />
          <a href="mailto:foi@sport.wales" className="font-semibold">
            foi@sport.wales
          </a>
        </p>

        <h3>By Post</h3>
        <p>
          Alternatively, you can write to:
          <br />
          <strong>
            Sport Wales
            <br />
            Sophia Gardens
            <br />
            Cardiff
            <br />
            CF11 9SW
          </strong>
        </p>
      </div>

      <h2>Our Publications</h2>
      <p>We regularly publish a range of documents and information, including:</p>
      <ul>
        <li>Annual Reports and Accounts</li>
        <li>Strategic Plans</li>
        <li>Board Papers and Decisions</li>
        <li>Research Reports</li>
        <li>Policies and Procedures</li>
      </ul>

      <h2>Fees</h2>
      <p>
        We do not charge for most Freedom of Information requests. However, if a request is likely
        to take more than 18 hours of work to complete, we may ask for a fee or refuse the request.
      </p>

      <h2>Appeals</h2>
      <p>
        If you are not satisfied with our response to your request, you can ask for an internal
        review. If you are still dissatisfied after the internal review, you can complain to the
        Information Commissioner&apos;s Office.
      </p>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, url: b.url || '' }))}
      />
      <LegalPageLayout
        title={isWelsh ? 'Rhyddid Gwybodaeth' : 'Freedom of Information'}
        lastUpdated="December 2025"
        breadcrumbs={breadcrumbs}
        isWelsh={isWelsh}
      >
        {content}
      </LegalPageLayout>
    </>
  );
}

