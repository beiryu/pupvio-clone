import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './about-me.module.scss';
import { Icons } from '@/lib/icons/iconsSvg';

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-b from-[#0047ff] to-black">
      <p className="text-center text-white text-[35px] font-bold p-20">
        About me
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-4/5 mx-auto">
        <div className="hidden lg:block mx-auto">
          <Icons.headphoneLogo width={180} height={180} />
        </div>
        <div className="w-3/4 mx-auto lg:ml-0 text-center lg:text-start">
          <p className="text-white text-base font-medium">
            Web3app is a portfolio tracker and gateway into web3. Track over
            100,000 assets easily with a few clicks and stay updated on web3
            markets..
          </p>

          <div className="flex justify-between gap-4 py-10 flex-col lg:py-20">
            <p className="text-white font-bold text-lg">
              Download the app today!
            </p>
            <div className="flex justify-center items-center gap-4 lg:justify-start">
              <Link
                href="https://apps.apple.com/us/app/web3app-portfolio-tracker/id6471078359"
                aria-label="apple-store"
              >
                <Icons.appleStore />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.eternalenginecorp.web3app"
                aria-label="google-play"
              >
                <Icons.googlePlay />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto w-4/5 my-10 lg:my-0">
        <div className="hidden lg:block mx-auto">
          <div className="w-60 h-auto z-40 relative">
            <Image
              unoptimized
              src="/assets/images/wallet.png"
              alt="Hero Banner"
              width={0}
              height={0}
              sizes="80vw"
              style={{ width: '80%', height: '80%' }}
            />
            <div className="top-[-40px] left-1/3 absolute -z-50">
              <Icons.circleGreen width={180} height={180} />
            </div>
            <div className="bottom-0 left-[-20px] absolute -z-50">
              <Icons.squareBlue width={130} height={130} />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-start">
          <p className="text-white text-[28px] font-bold pb-10 underline underline-offset-8 decoration-[#0047ff]">
            Wallet
          </p>
          <p className="text-white text-base font-medium">
            Most popular web3 wallets supported on our platform. Simply connect
            and import your transactions and automatically build out your
            portfolio..
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto w-4/5 my-10 lg:my-0">
        <div className="text-center lg:text-start">
          <p className="text-white text-[28px] font-bold pb-10 underline underline-offset-8 decoration-[#0047ff]">
            Bitcoin
          </p>
          <p className="text-white text-base font-medium">
            Lorem ipsum dolor sit amet consectetur. Feugiat etiam ultrices
            vestibulum nunc ornare viverra mi. Interdum varius posuere
            vestibulum amet eget vel etiam nisi.
          </p>
        </div>
        <div className="hidden lg:block mx-auto">
          <div className="w-60 h-auto z-40 relative">
            <Image
              unoptimized
              src="/assets/images/bitcoin.png"
              alt="Hero Banner"
              width={0}
              height={0}
              sizes="80vw"
              style={{ width: '80%', height: '80%' }}
            />
            <div className="bottom-0 right-[40px] absolute -z-50">
              <Icons.circleGreen width={70} height={70} />
            </div>
            <div className="bottom-1/2 left-[-50px] absolute -z-50">
              <Icons.triangleBlue width={180} height={180} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto w-4/5 my-10 lg:my-0">
        <div className="hidden lg:block mx-auto">
          <div className="w-60 h-auto z-40 relative">
            <Image
              unoptimized
              src="/assets/images/portfolio.png"
              alt="Hero Banner"
              width={0}
              height={0}
              sizes="80vw"
              style={{ width: '80%', height: '80%' }}
            />
            <div className="top-[-50px] left-1/2 absolute -z-50">
              <Icons.triangleGreen width={180} height={180} />
            </div>
            <div className="bottom-1/4 left-[-60px] absolute -z-50">
              <Icons.circleBlue width={130} height={130} />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-start">
          <p className="text-white text-[28px] font-bold pb-10 underline underline-offset-8 decoration-[#0047ff]">
            Portfolio
          </p>
          <p className="text-white text-base font-medium">
            Lorem ipsum dolor sit amet consectetur. Feugiat etiam ultrices
            vestibulum nunc ornare viverra mi. Interdum varius posuere
            vestibulum amet eget vel etiam nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
