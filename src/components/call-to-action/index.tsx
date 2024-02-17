import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <div className="bg-[#27D988] py-8">
      <div className="w-3/4 lg:w-1/2 mx-auto my-16 mb-[100px] text-center space-y-6">
        <p className="text-[35px] font-medium text-white">
          Your most trusted <span className="font-bold">web3 app</span> by over{' '}
          <span className="font-bold">10,000,000</span> users worldwide.
        </p>

        <Button className="bg-[#0047ff] px-10">CTA</Button>
      </div>
    </div>
  );
};

export default CallToAction;
