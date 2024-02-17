import Link from 'next/link';

interface ComponentProps {
  title: string;
  listText: string[];
  imageSvg: any;
}

const MediaObjectWhale = (props: ComponentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-10 py-20">
      <div className="text-center lg:text-start">
        <p className="text-white font-bold text-[35px] pb-6">{props.title}</p>
        <ul className="text-white text-lg font-bold underline underline-offset-8 decoration-[#0047ff] space-y-4">
          {props.listText?.map((item) => (
            <li key={item}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block relative">
        <div className="absolute top-[-260px]">{props.imageSvg}</div>
      </div>
    </div>
  );
};

export default MediaObjectWhale;
