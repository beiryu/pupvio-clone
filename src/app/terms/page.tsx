import TermsPage from '@/modules/terms';
import MaxWidthWrapper from '@/components/max-width-wrapper';

export default function Terms() {
  return (
    <div className="bg-gradient-to-b from-[#0047ff] to-black">
      <MaxWidthWrapper>
        <TermsPage />
      </MaxWidthWrapper>
    </div>
  );
}
