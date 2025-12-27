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
    { name: isWelsh ? 'Hafan' : 'Home', url: `https://www.sport.wales/${locale}` },
    { name: isWelsh ? 'Hygyrchedd' : 'Accessibility', url: `https://www.sport.wales/${locale}/accessibility` },
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

      <h2>Nodweddion Hygyrchedd</h2>
      <p>Rydym wedi gweithredu&apos;r nodweddion hygyrchedd canlynol:</p>
      <ul>
        <li>
          <strong>Dolen &quot;neidio i&apos;r cynnwys&quot;:</strong> Darperir dolen i alluogi defnyddwyr
          bysellfwrdd i neidio heibio&apos;r llywio
        </li>
        <li>
          <strong>HTML semantig:</strong> Rydym yn defnyddio hierarchaeth pennawd briodol (h1 → h2 → h3)
          a HTML semantig drwyddo draw
        </li>
        <li>
          <strong>Dangosyddion ffocws:</strong> Mae&apos;r holl elfennau rhyngweithiol yn dangos ffocws
          gweladwy wrth lywio â bysellfwrdd
        </li>
        <li>
          <strong>Cyferbyniad lliw:</strong> Mae&apos;r testun yn bodloni gofynion cyferbyniad WCAG 2.2 AA
          (4.5:1 ar gyfer testun arferol, 3:1 ar gyfer testun mawr)
        </li>
        <li>
          <strong>Labeli ffurflenni:</strong> Mae gan bob maes ffurflen labeli cysylltiedig a negeseuon
          gwall hygyrch
        </li>
        <li>
          <strong>Dyluniad ymatebol:</strong> Mae&apos;r wefan yn gweithio ar draws meintiau sgrin a
          dyfeisiau
        </li>
        <li>
          <strong>Cefnogaeth symudiad llai:</strong> Mae&apos;r wefan yn parchu dewis &quot;prefer-reduced-motion&quot;
          y defnyddiwr
        </li>
        <li>
          <strong>Priodoleddau ARIA:</strong> Rydym yn defnyddio priodoleddau ARIA lle bo angen i wella
          cydnawsedd darllenydd sgrin
        </li>
        <li>
          <strong>Maint targed cyffwrdd:</strong> Mae&apos;r elfennau rhyngweithiol yn bodloni gofynion
          maint lleiaf o 44x44 picsel
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
          Efallai na fydd gan rai fideos a fewnosodwyd gapsiynau. Rydym yn ychwanegu capsiynau at yr
          holl gynnwys fideo newydd.
        </li>
        <li>
          Efallai na fydd rhai delweddau wedi&apos;u rheoli gan y CMS yn cynnwys testun amgen eto.
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
        Mae hygyrchedd y wefan hon wedi&apos;i brofi gan ddefnyddio offer awtomataidd (axe DevTools,
        WAVE) ac adolygiad â llaw o lywio bysellfwrdd a strwythur semantig.
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
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (gyda diraddiad gosgeiddig)</li>
        <li>WAI-ARIA 1.2</li>
      </ul>

      <h2>Gwella Parhaus</h2>
      <p>
        Rydym wedi ymrwymo i wella hygyrchedd y wefan hon yn barhaus. Mae hyn yn cynnwys:
      </p>
      <ul>
        <li>Archwiliadau hygyrchedd rheolaidd</li>
        <li>Hyfforddiant parhaus i staff</li>
        <li>Ymgorffori hygyrchedd yn ein proses ddatblygu</li>
        <li>Croesawu adborth gan ddefnyddwyr</li>
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

      <h2>Accessibility Features</h2>
      <p>We have implemented the following accessibility features:</p>
      <ul>
        <li>
          <strong>Skip to content link:</strong> A skip link is provided to allow keyboard users to
          bypass navigation
        </li>
        <li>
          <strong>Semantic HTML:</strong> We use proper heading hierarchy (h1 → h2 → h3) and semantic
          HTML throughout
        </li>
        <li>
          <strong>Focus indicators:</strong> All interactive elements display visible focus when
          navigating with keyboard
        </li>
        <li>
          <strong>Colour contrast:</strong> Text meets WCAG 2.2 AA contrast requirements (4.5:1 for
          normal text, 3:1 for large text)
        </li>
        <li>
          <strong>Form labels:</strong> All form fields have associated labels and accessible error
          messages
        </li>
        <li>
          <strong>Responsive design:</strong> The website works across screen sizes and devices
        </li>
        <li>
          <strong>Reduced motion support:</strong> The website respects the user&apos;s
          &quot;prefers-reduced-motion&quot; preference
        </li>
        <li>
          <strong>ARIA attributes:</strong> We use ARIA attributes where needed to improve screen
          reader compatibility
        </li>
        <li>
          <strong>Touch target size:</strong> Interactive elements meet the minimum 44x44 pixel size
          requirement
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
        <li>
          Some CMS-managed images may not yet have alternative text provided.
        </li>
      </ul>

      <h3>Disproportionate Burden</h3>
      <p>We are not currently claiming disproportionate burden for any content.</p>

      <h2>Preparation of This Statement</h2>
      <p>
        This statement was prepared on December 2025. It was last reviewed on December 2025.
      </p>
      <p>
        This website&apos;s accessibility has been tested using automated tools (axe DevTools, WAVE) and
        manual review of keyboard navigation and semantic structure.
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
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (with graceful degradation)</li>
        <li>WAI-ARIA 1.2</li>
      </ul>

      <h2>Continuous Improvement</h2>
      <p>
        We are committed to continuously improving the accessibility of this website. This includes:
      </p>
      <ul>
        <li>Regular accessibility audits</li>
        <li>Ongoing staff training</li>
        <li>Incorporating accessibility into our development process</li>
        <li>Welcoming user feedback</li>
      </ul>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, url: b.url || '' }))}
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
