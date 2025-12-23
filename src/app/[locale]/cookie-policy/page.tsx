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
    title: isWelsh ? 'Polisi Cwcis | Chwaraeon Cymru' : 'Cookie Policy | Sport Wales',
    description: isWelsh
      ? 'Dysgwch am y cwcis rydym yn eu defnyddio ar wefan Chwaraeon Cymru.'
      : 'Learn about the cookies we use on the Sport Wales website.',
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Polisi Cwcis' : 'Cookie Policy', url: `https://www.sport.wales/${locale}/cookie-policy` },
  ];

  const content = isWelsh ? (
    <>
      <h2>Beth yw Cwcis?</h2>
      <p>
        Mae cwcis yn ffeiliau testun bach sy&apos;n cael eu gosod ar eich dyfais pan fyddwch yn
        ymweld â&apos;n gwefan. Maent yn ein helpu i wneud i&apos;r wefan weithio&apos;n well ac i
        ddeall sut mae ymwelwyr yn defnyddio&apos;r wefan.
      </p>

      <h2>Sut Rydym yn Defnyddio Cwcis</h2>
      <p>
        Efallai y byddwn yn casglu gwybodaeth am eich dyfais tra byddwch ar ein gwefan. Mae hyn yn
        ein galluogi i wella ein gwasanaethau ac i ddarparu gwybodaeth ystadegol ynghylch defnydd o&apos;n
        gwefan.
      </p>

      <h2>Mathau o Gwcis Rydym yn eu Defnyddio</h2>

      <h3>Cwcis Hollol Angenrheidiol</h3>
      <p>
        Mae&apos;r rhain yn angenrheidiol i&apos;r wefan weithio ac ni ellir eu diffodd. Maent fel
        arfer yn cael eu gosod mewn ymateb i gamau a gymerwch sy&apos;n gyfystyr â chais am
        wasanaethau.
      </p>

      <h3>Cwcis Perfformiad/Dadansoddol</h3>
      <p>
        Mae&apos;r cwcis hyn yn ein helpu i ddeall sut mae ymwelwyr yn rhyngweithio â&apos;n gwefan
        trwy gasglu gwybodaeth ddienw. Rydym yn defnyddio&apos;r wybodaeth hon i wella&apos;r wefan.
      </p>
      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Enw&apos;r Cwci</th>
            <th className="border border-gray-300 p-2 text-left">Pwrpas</th>
            <th className="border border-gray-300 p-2 text-left">Dod i ben</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">_ga</td>
            <td className="border border-gray-300 p-2">Google Analytics - Yn gwahaniaethu defnyddwyr</td>
            <td className="border border-gray-300 p-2">2 flynedd</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">_gid</td>
            <td className="border border-gray-300 p-2">Google Analytics - Yn gwahaniaethu defnyddwyr</td>
            <td className="border border-gray-300 p-2">24 awr</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">_gat</td>
            <td className="border border-gray-300 p-2">Google Analytics - Yn cyfyngu ceisiadau</td>
            <td className="border border-gray-300 p-2">1 munud</td>
          </tr>
        </tbody>
      </table>

      <h3>Cwcis Swyddogaethol</h3>
      <p>
        Mae&apos;r cwcis hyn yn galluogi&apos;r wefan i ddarparu swyddogaethedd a phersonoli
        gwell, fel cofio eich dewis iaith.
      </p>

      <h2>Rheoli Cwcis</h2>
      <p>
        Gallwch reoli cwcis trwy ddefnyddio gosodiadau eich porwr. Mae gan y rhan fwyaf o borwyr
        opsiynau i:
      </p>
      <ul>
        <li>Weld pa gwcis sydd ar eich dyfais</li>
        <li>Dileu cwcis unigol neu bob cwci</li>
        <li>Rhwystro cwcis trydydd parti</li>
        <li>Rhwystro pob cwci</li>
        <li>Dileu pob cwci pan fyddwch yn cau&apos;r porwr</li>
      </ul>

      <h2>Mwy o Wybodaeth</h2>
      <p>
        I gael mwy o wybodaeth am gwcis, gan gynnwys sut i weld pa gwcis sydd wedi&apos;u gosod a
        sut i&apos;w rheoli a&apos;u dileu, ewch i{' '}
        <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
          www.allaboutcookies.org
        </a>
        .
      </p>

      <h2>Cysylltu â Ni</h2>
      <p>
        Os oes gennych unrhyw gwestiynau am ein defnydd o gwcis, cysylltwch â ni ar{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a>.
      </p>
    </>
  ) : (
    <>
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device when you visit our website.
        They help us make the website work better and understand how visitors use the site.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We may on occasion gather information regarding your device whilst you are on our website.
        This enables us to improve our services and to provide statistical information regarding the
        use of our website.
      </p>

      <h2>Types of Cookies We Use</h2>

      <h3>Strictly Necessary Cookies</h3>
      <p>
        These are essential for the website to function and cannot be switched off. They are usually
        set in response to actions you take which amount to a request for services.
      </p>

      <h3>Performance/Analytical Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting
        anonymous information. We use this information to improve the site.
      </p>
      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
            <th className="border border-gray-300 p-2 text-left">Expiry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">_ga</td>
            <td className="border border-gray-300 p-2">Google Analytics - Distinguishes users</td>
            <td className="border border-gray-300 p-2">2 years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">_gid</td>
            <td className="border border-gray-300 p-2">Google Analytics - Distinguishes users</td>
            <td className="border border-gray-300 p-2">24 hours</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">_gat</td>
            <td className="border border-gray-300 p-2">Google Analytics - Throttles requests</td>
            <td className="border border-gray-300 p-2">1 minute</td>
          </tr>
        </tbody>
      </table>

      <h3>Functionality Cookies</h3>
      <p>
        These cookies enable the website to provide enhanced functionality and personalisation, such
        as remembering your language preference.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        You can manage cookies through your browser settings. Most browsers have options to:
      </p>
      <ul>
        <li>View what cookies are on your device</li>
        <li>Delete individual or all cookies</li>
        <li>Block third-party cookies</li>
        <li>Block all cookies</li>
        <li>Delete all cookies when you close the browser</li>
      </ul>

      <h2>More Information</h2>
      <p>
        To find out more about cookies, including how to see what cookies have been set and how to
        manage and delete them, visit{' '}
        <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
          www.allaboutcookies.org
        </a>
        .
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a>.
      </p>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, url: b.url || '' }))}
      />
      <LegalPageLayout
        title={isWelsh ? 'Polisi Cwcis' : 'Cookie Policy'}
        lastUpdated="December 2025"
        breadcrumbs={breadcrumbs}
        isWelsh={isWelsh}
      >
        {content}
      </LegalPageLayout>
    </>
  );
}

