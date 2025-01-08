import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/utils";

export const Slider = ({
  min = MIN_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
  label,
  className = '',
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  label: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium text-gray-300">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-system-purple20 
        disabled:opacity-50 disabled:cursor-not-allowed
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-system-purple60
        [&::-webkit-slider-thumb]:hover:bg-system-purple50
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-webkit-slider-thumb]:transition-colors"
      />
    </div>
  );
};
