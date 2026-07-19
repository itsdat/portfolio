import TextHighlighter from "../../ui/text-highlighter";

export default function BaseHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-lg py-7 md:py-20 text-3xl font-bold tracking-tight  text-center">
      <TextHighlighter type="wavy" highlightColor="#f59e0b">
        <span>{title}</span>
      </TextHighlighter>
    </div>
  );
}
