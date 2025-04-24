import { formatTemp } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import { clsx } from "clsx";

interface TemperatureMinMaxProps {
  tempMin: number;
  tempMax: number;
  className?: string;
}

const TemperatureMinMax = ({
  tempMin,
  tempMax,
  className,
}: TemperatureMinMaxProps) => {
  return (
    <div className={clsx("flex justify-center gap-4", className)}>
      <span className="flex items-center gap-1 text-blue-500">
        <ArrowDown className="h-3 w-3" />
        {formatTemp(tempMin)}
      </span>
      <span className="flex items-center gap-1 text-red-500">
        <ArrowUp className="h-3 w-3" />
        {formatTemp(tempMax)}
      </span>
    </div>
  );
};

export default TemperatureMinMax;
