import PrivacyPage from '@/modules/privacy';
import MaxWidthWrapper from '@/components/max-width-wrapper';

export default function Privacy() {
  return (
    <div className="bg-gradient-to-b from-[#0047ff] to-black">
      <MaxWidthWrapper>
        <PrivacyPage />
      </MaxWidthWrapper>
    </div>
  );
}
