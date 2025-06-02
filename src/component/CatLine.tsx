interface Props {
  content: string;
}

export default function CatLine({ content }: Props) {
  return (
    <div className="flex flex-row px-4 font-mono w-full text-white">
      <pre>{content}</pre>
    </div>
  );
}
