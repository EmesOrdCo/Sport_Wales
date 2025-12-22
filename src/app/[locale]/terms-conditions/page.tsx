import { setRequestLocale } from 'next-intl/server';
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
    title: isWelsh ? 'Telerau Defnyddio\'r Wefan | Chwaraeon Cymru' : 'Terms of Website Use | Sport Wales',
    description: isWelsh
      ? 'Telerau ac amodau defnyddio gwefan Chwaraeon Cymru.'
      : 'Terms and conditions for using the Sport Wales website.',
  };
}

export default async function TermsConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', href: '/' },
    { name: isWelsh ? 'Telerau Defnyddio\'r Wefan' : 'Terms of Website Use' },
  ];

  const content = isWelsh ? (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="font-semibold text-amber-800">
          DARLLENWCH Y TELERAU AC AMODAU HYN YN OFALUS CYN DEFNYDDIO&apos;R WEFAN HON
        </p>
      </div>

      <p>
        Mae&apos;r telerau hyn yn dweud wrthych y rheolau ar gyfer defnyddio ein gwefan{' '}
        <a href="https://www.sport.wales">www.sport.wales</a> (&quot;ein gwefan&quot;).
      </p>

      <h2>Pwy Ydym Ni a Sut i Gysylltu â Ni</h2>
      <p>
        Mae www.sport.wales yn wefan a weithredir gan Gyngor Chwaraeon Cymru (yn masnachu fel
        Chwaraeon Cymru), cwmni a grëwyd gan Siarter Frenhinol (&quot;Ni&quot;). I gysylltu â ni,
        e-bostiwch <a href="mailto:communications@sport.wales">communications@sport.wales</a>.
      </p>

      <h2>Trwy Ddefnyddio Ein Gwefan Rydych yn Derbyn y Telerau Hyn</h2>
      <p>
        Trwy ddefnyddio ein gwefan, rydych yn cadarnhau eich bod yn derbyn y telerau defnydd hyn ac
        yn cytuno i gydymffurfio â nhw.
      </p>
      <p>Os nad ydych yn cytuno â&apos;r telerau hyn, rhaid i chi beidio â defnyddio ein gwefan.</p>
      <p>
        Rydym yn argymell eich bod yn argraffu copi o&apos;r telerau hyn i&apos;w cadw ar gyfer y
        dyfodol.
      </p>

      <h2>Mae Telerau Eraill a All Fod yn Berthnasol i Chi</h2>
      <p>
        Mae&apos;r telerau defnydd hyn yn cyfeirio at y telerau ychwanegol canlynol, sydd hefyd yn
        berthnasol i&apos;ch defnydd o&apos;n gwefan:
      </p>
      <ul>
        <li>
          Ein <Link href="/cookie-policy">Polisi Cwcis</Link>, sy&apos;n nodi gwybodaeth am y
          cwcis ar ein gwefan.
        </li>
        <li>
          Ein <Link href="/privacy-policy">Polisi Preifatrwydd</Link>, sy&apos;n nodi&apos;r
          telerau ar sut rydym yn prosesu unrhyw ddata personol a gasglwn gennych.
        </li>
      </ul>

      <h2>Gallwn Wneud Newidiadau i&apos;r Telerau Hyn</h2>
      <p>
        Rydym yn diwygio&apos;r telerau hyn o bryd i&apos;w gilydd. Bob tro y dymunwch ddefnyddio ein
        gwefan, gwiriwch y telerau hyn i sicrhau eich bod yn deall y telerau sy&apos;n berthnasol ar
        y pryd hwnnw.
      </p>

      <h2>Gallwn Wneud Newidiadau i&apos;n Gwefan</h2>
      <p>
        Gallwn ddiweddaru a newid ein gwefan o bryd i&apos;w gilydd, er enghraifft i adlewyrchu
        newidiadau i&apos;n gwasanaethau, anghenion ein defnyddwyr a&apos;n blaenoriaethau busnes.
      </p>

      <h2>Gallwn Atal neu Dynnu Ein Gwefan yn Ôl</h2>
      <p>Darperir ein gwefan yn rhad ac am ddim.</p>
      <p>
        Nid ydym yn gwarantu y bydd ein gwefan, nac unrhyw gynnwys arni, bob amser ar gael nac yn
        ddi-dor. Gallwn atal neu dynnu&apos;n ôl neu gyfyngu argaeledd ein gwefan gyfan neu unrhyw
        ran ohoni am resymau busnes a gweithredol.
      </p>

      <h2>Rhaid i Chi Gadw Manylion Eich Cyfrif yn Ddiogel</h2>
      <p>
        Os byddwch yn dewis, neu os rhoddir i chi, god adnabod defnyddiwr, cyfrinair neu unrhyw
        wybodaeth arall fel rhan o&apos;n gweithdrefnau diogelwch, rhaid i chi drin gwybodaeth o&apos;r
        fath yn gyfrinachol. Rhaid i chi beidio â&apos;i datgelu i unrhyw drydydd parti.
      </p>

      <h2>Sut Gallwch Ddefnyddio Deunydd ar Ein Gwefan</h2>
      <p>
        Ni yw perchennog neu ddeiliaid trwydded yr holl hawliau eiddo deallusol yn ein gwefan, ac
        yn y deunydd a gyhoeddir arni. Mae&apos;r gweithiau hynny wedi&apos;u diogelu gan gyfreithiau
        hawlfraint a chytuniadau ledled y byd. Cedwir yr holl hawliau o&apos;r fath.
      </p>
      <p>
        Gallwch argraffu un copi, a gallwch lawrlwytho darnau o unrhyw dudalen(nau) o&apos;n gwefan
        ar gyfer eich defnydd personol.
      </p>
      <p>
        Rhaid i chi beidio â defnyddio unrhyw ran o&apos;r cynnwys ar ein gwefan at ddibenion
        masnachol heb gael trwydded i wneud hynny gennym ni neu ein trwyddedwyr.
      </p>

      <h2>Peidiwch â Dibynnu ar Wybodaeth ar y Wefan Hon</h2>
      <p>
        Darperir y cynnwys ar ein gwefan er gwybodaeth gyffredinol yn unig. Ni fwriedir iddo fod yn
        gyngor y dylech ddibynnu arno.
      </p>

      <h2>Nid Ydym yn Gyfrifol am Wefannau Rydym yn Cysylltu â Nhw</h2>
      <p>
        Pan fo ein gwefan yn cynnwys dolenni i wefannau ac adnoddau eraill a ddarperir gan drydydd
        partïon, darperir y dolenni hyn er gwybodaeth i chi yn unig.
      </p>

      <h2>Pa Gyfreithiau Gwlad sy&apos;n Berthnasol i Unrhyw Anghydfodau?</h2>
      <p>
        Os ydych yn ddefnyddiwr, nodwch fod y telerau defnydd hyn, eu pwnc a&apos;u ffurfio, yn
        cael eu llywodraethu gan gyfraith Lloegr. Rydych chi a ni&apos;n cytuno y bydd gan lysoedd
        Cymru a Lloegr awdurdodaeth.
      </p>
    </>
  ) : (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="font-semibold text-amber-800">
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE
        </p>
      </div>

      <p>
        These terms tell you the rules for using our website{' '}
        <a href="https://www.sport.wales">www.sport.wales</a> (&quot;our site&quot;).
      </p>

      <h2>Who We Are and How to Contact Us</h2>
      <p>
        www.sport.wales is a site operated by The Sports Council for Wales (trading as Sport Wales),
        a company created by Royal Charter (&quot;We&quot;). To contact us, please email{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a>.
      </p>

      <h2>By Using Our Site You Accept These Terms</h2>
      <p>
        By using our site, you confirm that you accept these terms of use and that you agree to
        comply with them.
      </p>
      <p>If you do not agree to these terms, you must not use our site.</p>
      <p>We recommend that you print a copy of these terms for future reference.</p>

      <h2>There Are Other Terms That May Apply to You</h2>
      <p>
        These terms of use refer to the following additional terms, which also apply to your use of
        our site:
      </p>
      <ul>
        <li>
          Our <Link href="/cookie-policy">Cookie Policy</Link>, which sets out information about
          the cookies on our site.
        </li>
        <li>
          Our <Link href="/privacy-policy">Privacy Policy</Link>, which sets out the terms on
          which we process any personal data we collect from you.
        </li>
      </ul>

      <h2>We May Make Changes to These Terms</h2>
      <p>
        We amend these terms from time to time. Every time you wish to use our site, please check
        these terms to ensure you understand the terms that apply at that time.
      </p>

      <h2>We May Make Changes to Our Site</h2>
      <p>
        We may update and change our site from time to time, for example to reflect changes to our
        services, our users&apos; needs and our business priorities.
      </p>

      <h2>We May Suspend or Withdraw Our Site</h2>
      <p>Our site is made available free of charge.</p>
      <p>
        We do not guarantee that our site, or any content on it, will always be available or be
        uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of
        our site for business and operational reasons.
      </p>

      <h2>You Must Keep Your Account Details Safe</h2>
      <p>
        If you choose, or you are provided with, a user identification code, password or any other
        piece of information as part of our security procedures, you must treat such information as
        confidential. You must not disclose it to any third party.
      </p>

      <h2>How You May Use Material on Our Site</h2>
      <p>
        We are the owner or the licensee of all intellectual property rights in our site, and in the
        material published on it. Those works are protected by copyright laws and treaties around
        the world. All such rights are reserved.
      </p>
      <p>
        You may print off one copy, and may download extracts, of any page(s) from our site for your
        personal use.
      </p>
      <p>
        You must not use any part of the content on our site for commercial purposes without
        obtaining a licence to do so from us or our licensors.
      </p>

      <h2>Do Not Rely on Information on This Site</h2>
      <p>
        The content on our site is provided for general information only. It is not intended to
        amount to advice on which you should rely.
      </p>

      <h2>We Are Not Responsible for Websites We Link To</h2>
      <p>
        Where our site contains links to other sites and resources provided by third parties, these
        links are provided for your information only.
      </p>

      <h2>Which Country&apos;s Laws Apply to Any Disputes?</h2>
      <p>
        If you are a consumer, please note that these terms of use, their subject matter and their
        formation, are governed by English law. You and we both agree that the courts of England and
        Wales will have jurisdiction.
      </p>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, href: b.href || '' }))}
      />
      <LegalPageLayout
        title={isWelsh ? 'Telerau Defnyddio\'r Wefan' : 'Terms of Website Use'}
        lastUpdated="December 2025"
        breadcrumbs={breadcrumbs}
        isWelsh={isWelsh}
      >
        {content}
      </LegalPageLayout>
    </>
  );
}

