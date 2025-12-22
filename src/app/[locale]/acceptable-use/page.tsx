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
    title: isWelsh
      ? 'Polisi Defnydd Derbyniol | Chwaraeon Cymru'
      : 'Acceptable Use Policy | Sport Wales',
    description: isWelsh
      ? 'Polisi defnydd derbyniol ar gyfer gwefan Chwaraeon Cymru.'
      : 'Acceptable use policy for the Sport Wales website.',
  };
}

export default async function AcceptableUsePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isWelsh = locale === 'cy';

  const breadcrumbs = [
    { name: isWelsh ? 'Hafan' : 'Home', href: '/' },
    { name: isWelsh ? 'Polisi Defnydd Derbyniol' : 'Acceptable Use Policy' },
  ];

  const content = isWelsh ? (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="font-semibold text-amber-800">
          DARLLENWCH DELERAU&apos;R POLISI HWN YN OFALUS CYN DEFNYDDIO&apos;R WEFAN
        </p>
      </div>

      <h2>Beth sydd yn y Telerau Hyn?</h2>
      <p>
        Mae&apos;r polisi defnydd derbyniol hwn yn nodi&apos;r safonau cynnwys sy&apos;n berthnasol
        pan fyddwch yn llwytho cynnwys i&apos;n gwefan, yn cysylltu â defnyddwyr eraill ar ein
        gwefan, yn cysylltu â&apos;n gwefan, neu&apos;n rhyngweithio â&apos;n gwefan mewn unrhyw
        ffordd arall.
      </p>

      <h2>Pwy Ydym Ni a Sut i Gysylltu â Ni</h2>
      <p>
        Mae www.sport.wales yn wefan a weithredir gan Gyngor Chwaraeon Cymru (yn masnachu fel
        Chwaraeon Cymru) (&quot;Ni&quot;).
      </p>
      <p>
        I gysylltu â ni, e-bostiwch{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a> neu ffoniwch ein
        llinell gwasanaeth cwsmeriaid ar <a href="tel:03003003123">0300 3003123</a>.
      </p>

      <h2>Trwy Ddefnyddio Ein Gwefan Rydych yn Derbyn y Telerau Hyn</h2>
      <p>
        Trwy ddefnyddio ein gwefan, rydych yn cadarnhau eich bod yn derbyn telerau&apos;r polisi hwn
        ac yn cytuno i gydymffurfio â nhw.
      </p>
      <p>Os nad ydych yn cytuno â&apos;r telerau hyn, rhaid i chi beidio â defnyddio ein gwefan.</p>

      <h2>Mae Telerau Eraill a All Fod yn Berthnasol i Chi</h2>
      <p>
        Mae ein <Link href="/terms-conditions">Telerau Defnyddio Gwefan</Link> hefyd yn
        berthnasol i&apos;ch defnydd o&apos;n gwefan.
      </p>

      <h2>Gallwn Wneud Newidiadau i Delerau&apos;r Polisi Hwn</h2>
      <p>
        Rydym yn diwygio&apos;r telerau hyn o bryd i&apos;w gilydd. Bob tro y dymunwch ddefnyddio ein
        gwefan, gwiriwch y telerau hyn i sicrhau eich bod yn deall y telerau sy&apos;n berthnasol ar
        y pryd hwnnw.
      </p>

      <h2>Defnydd Gwaharddedig</h2>
      <p>
        Gallwch ddefnyddio ein gwefan at ddibenion cyfreithlon yn unig. Ni chewch ddefnyddio ein
        gwefan:
      </p>
      <ul>
        <li>
          Mewn unrhyw ffordd sy&apos;n torri unrhyw gyfraith neu reoliad lleol, cenedlaethol neu
          ryngwladol perthnasol.
        </li>
        <li>
          Mewn unrhyw ffordd sy&apos;n anghyfreithlon neu&apos;n dwyllodrus, neu sydd ag unrhyw
          bwrpas neu effaith anghyfreithlon neu dwyllodrus.
        </li>
        <li>At ddiben niweidio neu geisio niweidio plant mewn unrhyw ffordd.</li>
        <li>
          I anfon, derbyn yn fwriadol, llwytho i fyny, lawrlwytho, defnyddio neu ailddefnyddio
          unrhyw ddeunydd nad yw&apos;n cydymffurfio â&apos;n safonau cynnwys.
        </li>
        <li>
          I drosglwyddo, neu gaffael anfon, unrhyw ddeunydd hysbysebu neu hyrwyddo diofyn neu heb
          awdurdod neu unrhyw fath arall o ddeisyfiad tebyg (sbam).
        </li>
        <li>
          I drosglwyddo yn fwriadol unrhyw ddata, anfon neu lwytho i fyny unrhyw ddeunydd sy&apos;n
          cynnwys firysau, ceffylau Trojan, mwydod, bomiau amser neu unrhyw raglenni niweidiol
          eraill.
        </li>
      </ul>

      <h2>Rydych Hefyd yn Cytuno</h2>
      <ul>
        <li>
          Peidio ag atgynhyrchu, dyblygu, copïo nac ailwerthu unrhyw ran o&apos;n gwefan yn groes
          i ddarpariaethau ein <Link href="/terms-conditions">telerau defnyddio gwefan</Link>.
        </li>
        <li>
          Peidio â chael mynediad heb awdurdod, ymyrryd â, difrodi neu amharu ar:
          <ul>
            <li>unrhyw ran o&apos;n gwefan;</li>
            <li>unrhyw offer neu rwydwaith y mae ein gwefan yn cael ei storio arno;</li>
            <li>unrhyw feddalwedd a ddefnyddir i ddarparu ein gwefan; neu</li>
            <li>unrhyw offer neu rwydwaith neu feddalwedd sy&apos;n eiddo i drydydd parti.</li>
          </ul>
        </li>
      </ul>

      <h2>Safonau Cynnwys</h2>
      <p>
        Mae&apos;r safonau cynnwys hyn yn berthnasol i unrhyw ddeunydd a gyfrannwch i&apos;n gwefan
        ac i unrhyw wasanaethau rhyngweithiol cysylltiedig.
      </p>
      <p>Rhaid i&apos;ch cyfraniadau:</p>
      <ul>
        <li>Fod yn gywir (pan fyddant yn nodi ffeithiau)</li>
        <li>Fod yn ddidwyll (pan fyddant yn mynegi barn)</li>
        <li>Cydymffurfio â&apos;r gyfraith berthnasol yn y DU</li>
      </ul>

      <h2>Cysylltu â Ni</h2>
      <p>
        Os oes gennych gwestiynau am y polisi hwn, cysylltwch â ni ar{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a>.
      </p>
    </>
  ) : (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="font-semibold text-amber-800">
          PLEASE READ THE TERMS OF THIS POLICY CAREFULLY BEFORE USING THE SITE
        </p>
      </div>

      <h2>What&apos;s in These Terms?</h2>
      <p>
        This acceptable use policy sets out the content standards that apply when you upload content
        to our site, make contact with other users on our site, link to our site, or interact with
        our site in any other way.
      </p>

      <h2>Who We Are and How to Contact Us</h2>
      <p>
        www.sport.wales is a site operated by The Sports Council for Wales (trading as Sport Wales)
        (&quot;We&quot;).
      </p>
      <p>
        To contact us, please email{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a> or telephone our
        customer service line on <a href="tel:03003003123">0300 3003123</a>.
      </p>

      <h2>By Using Our Site You Accept These Terms</h2>
      <p>
        By using our site, you confirm that you accept the terms of this policy and that you agree
        to comply with them.
      </p>
      <p>If you do not agree to these terms, you must not use our site.</p>

      <h2>There Are Other Terms That May Apply to You</h2>
      <p>
        Our <Link href="/terms-conditions">Terms of Website Use</Link> also apply to your use of
        our site.
      </p>

      <h2>We May Make Changes to the Terms of This Policy</h2>
      <p>
        We amend these terms from time to time. Every time you wish to use our site, please check
        these terms to ensure you understand the terms that apply at that time.
      </p>

      <h2>Prohibited Uses</h2>
      <p>You may use our site only for lawful purposes. You may not use our site:</p>
      <ul>
        <li>
          In any way that breaches any applicable local, national or international law or
          regulation.
        </li>
        <li>
          In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or
          effect.
        </li>
        <li>For the purpose of harming or attempting to harm minors in any way.</li>
        <li>
          To send, knowingly receive, upload, download, use or re-use any material which does not
          comply with our content standards.
        </li>
        <li>
          To transmit, or procure the sending of, any unsolicited or unauthorised advertising or
          promotional material or any other form of similar solicitation (spam).
        </li>
        <li>
          To knowingly transmit any data, send or upload any material that contains viruses, Trojan
          horses, worms, time-bombs or any other harmful programs.
        </li>
      </ul>

      <h2>You Also Agree</h2>
      <ul>
        <li>
          Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the
          provisions of our <Link href="/terms-conditions">terms of website use</Link>.
        </li>
        <li>
          Not to access without authority, interfere with, damage or disrupt:
          <ul>
            <li>any part of our site;</li>
            <li>any equipment or network on which our site is stored;</li>
            <li>any software used in the provision of our site; or</li>
            <li>any equipment or network or software owned or used by any third party.</li>
          </ul>
        </li>
      </ul>

      <h2>Content Standards</h2>
      <p>
        These content standards apply to any and all material which you contribute to our site and
        to any interactive services associated with it.
      </p>
      <p>Your contributions must:</p>
      <ul>
        <li>Be accurate (where they state facts)</li>
        <li>Be genuinely held (where they state opinions)</li>
        <li>Comply with applicable law in the UK</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this policy, please contact us at{' '}
        <a href="mailto:communications@sport.wales">communications@sport.wales</a>.
      </p>
    </>
  );

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.name, href: b.href || '' }))}
      />
      <LegalPageLayout
        title={isWelsh ? 'Polisi Defnydd Derbyniol' : 'Acceptable Use Policy'}
        lastUpdated="December 2025"
        breadcrumbs={breadcrumbs}
        isWelsh={isWelsh}
      >
        {content}
      </LegalPageLayout>
    </>
  );
}

