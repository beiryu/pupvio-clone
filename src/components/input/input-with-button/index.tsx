import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function InputWithButton() {
  return (
    <>
      <label className="text-white text-lg font-medium block pb-1">
        Enter your email
      </label>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button
          type="submit"
          className="bg-white text-[#0047ff] px-8 hover:bg-gray-200"
        >
          Subscribe
        </Button>
      </div>
    </>
  );
}
