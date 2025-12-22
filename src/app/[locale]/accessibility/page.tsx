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
      ? 'Datganiad Hygyrchedd | Chwaraeon Cymru'
      : 'Accessibility Statement | Sport Wales',
    description: isWelsh
      ? 'Datganiad hygyrchedd ar gyfer gwefan Chwaraeon Cymru.'
      : 'Accessibility statement for the Sport Wales website.',
  };
}

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', href: '/' },
    { name: isWelsh ? 'Hygyrchedd' : 'Accessibility' },
  ];

  const content = isWelsh ? (
    <>
      <h2>Ein Hymrwymiad i Hygyrchedd</h2>
      <p>
        Mae Chwaraeon Cymru wedi ymrwymo i wneud ein gwefan yn hygyrch, yn unol â Rheoliadau
        Hygyrchedd Cyrff Sector Cyhoeddus (Gwefannau ac Apiau Symudol) (Rhif 2) 2018.
      </p>
      <p>
        Mae&apos;r datganiad hygyrchedd hwn yn berthnasol i{' '}
        <a href="https://www.sport.wales">www.sport.wales</a>.
      </p>

      <h2>Statws Cydymffurfio</h2>
      <p>
        Mae&apos;r wefan hon yn cydymffurfio&apos;n rhannol â safon{' '}
        <a
          href="https://www.w3.org/TR/WCAG22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Canllawiau Hygyrchedd Cynnwys Gwe (WCAG) 2.2
        </a>{' '}
        lefel AA, oherwydd y diffygion cydymffurfio a restrir isod.
      </p>

      <h2>Cynnwys Hygyrch</h2>
      <p>Rydym wedi cymryd y camau canlynol i sicrhau hygyrchedd:</p>
      <ul>
        <li>
          <strong>Llywio bysellfwrdd:</strong> Gellir llywio pob elfen ryngweithiol gan ddefnyddio
          bysellfwrdd yn unig
        </li>
        <li>
          <strong>Cydweddoldeb darllenydd sgrin:</strong> Rydym wedi profi gyda NVDA, VoiceOver a
          JAWS
        </li>
        <li>
          <strong>Cyferbyniad lliw:</strong> Mae&apos;r holl destun yn bodloni gofynion cyferbyniad
          WCAG 2.2 AA
        </li>
        <li>
          <strong>Testun amgen:</strong> Mae gan yr holl ddelweddau ystyrlonrwydd destun amgen
          disgrifiadol
        </li>
        <li>
          <strong>Strwythur pennawd:</strong> Mae penawdau wedi&apos;u strwythuro&apos;n
          hierarchaidd
        </li>
        <li>
          <strong>Ffurflenni hygyrch:</strong> Mae gan bob maes ffurflen labeli a negeseuon gwall
          priodol
        </li>
        <li>
          <strong>Dolen neidio:</strong> Darperir dolen &quot;neidio i&apos;r prif gynnwys&quot;
        </li>
        <li>
          <strong>Ymatebol:</strong> Mae&apos;r wefan yn gweithio ar draws pob maint sgrin a dyfais
        </li>
      </ul>

      <h2>Cynnwys Anhygyrch</h2>
      <p>Mae&apos;r cynnwys a restrir isod yn anhygyrch am y rhesymau canlynol:</p>

      <h3>Diffyg Cydymffurfio â&apos;r Rheoliadau Hygyrchedd</h3>
      <ul>
        <li>
          Efallai na fydd rhai dogfennau PDF hŷn yn hollol hygyrch. Rydym yn gweithio i ddiweddaru&apos;r
          rhain.
        </li>
        <li>
          Efallai y bydd gan rai fideos a fewnosodwyd heb gapsiynau. Rydym yn ychwanegu capsiynau at
          yr holl gynnwys fideo newydd.
        </li>
      </ul>

      <h3>Baich Anghymesur</h3>
      <p>
        Ar hyn o bryd nid ydym yn honni baich anghymesur ar gyfer unrhyw gynnwys.
      </p>

      <h2>Paratoi&apos;r Datganiad Hwn</h2>
      <p>
        Paratowyd y datganiad hwn ar Ragfyr 2025. Fe&apos;i hadolygwyd ddiwethaf ar Ragfyr 2025.
      </p>
      <p>
        Cafodd y wefan hon ei phrofi ddiwethaf ar Ragfyr 2025. Cynhaliwyd y prawf yn fewnol gan
        ddefnyddio offer awtomataidd ac adolygiad â llaw.
      </p>

      <h2>Adborth a Gwybodaeth Gyswllt</h2>
      <p>
        Rydym bob amser yn ceisio gwella hygyrchedd y wefan hon. Os byddwch yn dod o hyd i unrhyw
        broblemau nad ydynt wedi&apos;u rhestru ar y dudalen hon, neu os ydych yn credu nad ydym yn
        bodloni gofynion hygyrchedd, cysylltwch â ni:
      </p>
      <ul>
        <li>
          E-bost:{' '}
          <a href="mailto:communications@sport.wales">communications@sport.wales</a>
        </li>
        <li>
          Ffôn: <a href="tel:+443003003111">0300 300 3111</a>
        </li>
        <li>
          Post: Chwaraeon Cymru, Gerddi Sophia, Caerdydd, CF11 9SW
        </li>
      </ul>

      <h2>Gweithdrefn Gorfodi</h2>
      <p>
        Y Comisiwn Cydraddoldeb a Hawliau Dynol (EHRC) sy&apos;n gyfrifol am orfodi Rheoliadau
        Hygyrchedd Cyrff Sector Cyhoeddus (Gwefannau ac Apiau Symudol) (Rhif 2) 2018.
      </p>
      <p>
        Os nad ydych yn hapus â sut rydym yn ymateb i&apos;ch cwyn, cysylltwch â&apos;r{' '}
        <a
          href="https://www.equalityadvisoryservice.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gwasanaeth Cynghori a Chymorth Cydraddoldeb (EASS)
        </a>
        .
      </p>

      <h2>Gwybodaeth Dechnegol</h2>
      <p>
        Mae Chwaraeon Cymru wedi ymrwymo i wneud ei wefan yn hygyrch, yn unol â Rheoliadau
        Hygyrchedd Cyrff Sector Cyhoeddus (Gwefannau ac Apiau Symudol) (Rhif 2) 2018.
      </p>

      <h2>Technolegau Cydnaws</h2>
      <p>Mae hygyrchedd y wefan hon yn dibynnu ar y technolegau canlynol i weithio:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ARIA</li>
      </ul>
    </>
  ) : (
    <>
      <h2>Our Commitment to Accessibility</h2>
      <p>
        Sport Wales is committed to making our website accessible, in accordance with the Public
        Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.
      </p>
      <p>
        This accessibility statement applies to{' '}
        <a href="https://www.sport.wales">www.sport.wales</a>.
      </p>

      <h2>Compliance Status</h2>
      <p>
        This website is partially compliant with the{' '}
        <a
          href="https://www.w3.org/TR/WCAG22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.2
        </a>{' '}
        level AA, due to the non-compliances listed below.
      </p>

      <h2>Accessible Content</h2>
      <p>We have taken the following steps to ensure accessibility:</p>
      <ul>
        <li>
          <strong>Keyboard navigation:</strong> All interactive elements can be navigated using
          keyboard only
        </li>
        <li>
          <strong>Screen reader compatibility:</strong> We have tested with NVDA, VoiceOver, and
          JAWS
        </li>
        <li>
          <strong>Colour contrast:</strong> All text meets WCAG 2.2 AA contrast requirements
        </li>
        <li>
          <strong>Alternative text:</strong> All meaningful images have descriptive alt text
        </li>
        <li>
          <strong>Heading structure:</strong> Headings are structured hierarchically
        </li>
        <li>
          <strong>Accessible forms:</strong> All form fields have proper labels and error messages
        </li>
        <li>
          <strong>Skip link:</strong> A &quot;skip to main content&quot; link is provided
        </li>
        <li>
          <strong>Responsive:</strong> The website works across all screen sizes and devices
        </li>
      </ul>

      <h2>Non-Accessible Content</h2>
      <p>The content listed below is non-accessible for the following reasons:</p>

      <h3>Non-Compliance with the Accessibility Regulations</h3>
      <ul>
        <li>
          Some older PDF documents may not be fully accessible. We are working to update these.
        </li>
        <li>
          Some embedded videos may be missing captions. We are adding captions to all new video
          content.
        </li>
      </ul>

      <h3>Disproportionate Burden</h3>
      <p>We are not currently claiming disproportionate burden for any content.</p>

      <h2>Preparation of This Statement</h2>
      <p>
        This statement was prepared on December 2025. It was last reviewed on December 2025.
      </p>
      <p>
        This website was last tested on December 2025. The test was carried out internally using
        automated tools and manual review.
      </p>

      <h2>Feedback and Contact Information</h2>
      <p>
        We are always looking to improve the accessibility of this website. If you find any problems
        not listed on this page, or if you think we&apos;re not meeting accessibility requirements,
        please contact us:
      </p>
      <ul>
        <li>
          Email:{' '}
          <a href="mailto:communications@sport.wales">communications@sport.wales</a>
        </li>
        <li>
          Phone: <a href="tel:+443003003111">0300 300 3111</a>
        </li>
        <li>Post: Sport Wales, Sophia Gardens, Cardiff, CF11 9SW</li>
      </ul>

      <h2>Enforcement Procedure</h2>
      <p>
        The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public
        Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.
      </p>
      <p>
        If you&apos;re not happy with how we respond to your complaint, contact the{' '}
        <a
          href="https://www.equalityadvisoryservice.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Equality Advisory and Support Service (EASS)
        </a>
        .
      </p>

      <h2>Technical Information</h2>
      <p>
        Sport Wales is committed to making its website accessible, in accordance with the Public
        Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.
      </p>

      <h2>Compatible Technologies</h2>
      <p>
        Accessibility of this website relies on the following technologies to work:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ARIA</li>
      </ul>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, href: b.href || '' }))}
      />
      <LegalPageLayout
        title={isWelsh ? 'Datganiad Hygyrchedd' : 'Accessibility Statement'}
        lastUpdated="December 2025"
        breadcrumbs={breadcrumbs}
        isWelsh={isWelsh}
      >
        {content}
      </LegalPageLayout>
    </>
  );
}

