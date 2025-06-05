interface Props {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  selfIndex: number;
  text: string;
}

export const NavigatorTab = ({
  tabIndex,
  setTabIndex,
  selfIndex,
  text,
}: Props) => {
  return (
    <button
      className={
        "flex h-full sm:w-1/4 w-1/3 p-4 hover:bg-zinc-500 hover:text-white " +
        (tabIndex == selfIndex
          ? "bg-zinc-700 text-white"
          : "bg-zinc-800 text-zinc-300")
      }
      onClick={() => tabIndex != selfIndex && setTabIndex(selfIndex)}
    >
      {text}
    </button>
  );
};
