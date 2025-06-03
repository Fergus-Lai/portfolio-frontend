import type { Wget } from "../utils/command";

interface Props {
  wget: Wget;
}

export const WgetLine = ({ wget }: Props) => {
  return (
    <div className="flex flex-col px-4 font-mono w-full text-white">
      Downloading {wget.file}...
    </div>
  );
};
