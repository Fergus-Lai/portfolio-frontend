const urlRegex = new RegExp(/(https:\/\/[^\s"']+)/);

export const CardDescription = ({
  descriptions,
}: {
  descriptions: string[];
}) => (
  <ul className="list-disc px-4">
    {descriptions.map((description, i) =>
      description.includes("https://") ? (
        <li key={i}>
          {description.split(urlRegex).map((element, i) =>
            element.match(urlRegex) ? (
              <a key={i} href={element} className="underline">
                {element}
              </a>
            ) : (
              <div key={i}>{element}</div>
            )
          )}
        </li>
      ) : (
        <li key={i}>{description}</li>
      )
    )}
  </ul>
);
