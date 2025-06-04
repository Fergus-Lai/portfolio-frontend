interface Props {
  content: string;
}
import DOMPurify from "dompurify";

const linkify = (text: string) =>
  text.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" class="underline">$1</a>'
  );

export default function CatLine({ content }: Props) {
  const safeHtml = DOMPurify.sanitize(linkify(content));

  return (
    <div className="flex flex-row px-4 font-mono w-full text-white">
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code dangerouslySetInnerHTML={{ __html: safeHtml }} />
      </pre>
    </div>
  );
}
