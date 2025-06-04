import { useEffect, useState } from "react";

export default function Welcome() {
  const [formattedTimeString, setFormattedTimeString] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short", // Tue
      year: "numeric", // 2025
      month: "short", // Jun
      day: "numeric", // 3
      hour: "2-digit", // 10
      minute: "2-digit", // 15
      second: "2-digit", // 00
      timeZone: "UTC",
      timeZoneName: "short", // UTC
    };
    const time = new Date();
    setFormattedTimeString(
      time
        .toLocaleString("en-US", options)
        .replace(",", "") // remove comma after weekday
        .replace("UTC", "UTC")
    );
    return () => {};
  }, []);

  return (
    <div className="flex flex-col px-4 font-mono w-full text-white">
      <div>Welcome to Fergus's Portfolio</div>
      <div className="px-4">Type 'help' to show supported command</div>
      <div className="px-4">System Time: {formattedTimeString}</div>
    </div>
  );
}
