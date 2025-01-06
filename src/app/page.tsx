"use client";

import { Select } from "@/components/Input/Select";
import { Slider } from "@/components/Input/Slider";
import { useSortingAlgorithmContext } from "@/context/Visualizer";
import { AnimationArrayType, SortingAlgorithmType } from "@/lib/types";
import {
  algorithmOptions,
  generateAnimationArray,
  sortingAlgorithmsData,
} from "@/lib/utils";
import { FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { useEffect, useState } from "react";

export default function Home() {
  const {
    arrayToSort,
    isSorting,
    animationSpeed,
    setAnimationSpeed,
    numLines,
    setNumLines,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();

  const [lineWidth, setLineWidth] = useState(0);
  const [displayValues, setDisplayValues] = useState(arrayToSort);
  const [showValues, setShowValues] = useState(true);

  useEffect(() => {
    setDisplayValues(arrayToSort);
  }, [arrayToSort]);

  useEffect(() => {
    const updateLineWidth = () => {
      const contentContainer = document.getElementById("line-container");
      if (contentContainer) {
        const containerWidth = contentContainer.clientWidth;
        const gap = 4; // 2px gap on each side (mx-0.5 = 0.125rem = 2px)
        const totalGapWidth = (numLines - 1) * gap;
        const availableWidth = containerWidth - totalGapWidth;
        const calculatedWidth = Math.floor(availableWidth / numLines);
        setLineWidth(Math.max(calculatedWidth, 6)); // Ensure minimum width of 6px
      }
    };

    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);

    return () => {
      window.removeEventListener("resize", updateLineWidth);
    };
  }, [numLines]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }

    const runAnimationWithValueUpdate = (animations: AnimationArrayType) => {
      const inverseSpeed = (1 / animationSpeed) * 400;

      animations.forEach((animation: [number[], boolean], index: number) => {
        const [lineIndexes, isSwap] = animation;
        if (isSwap) {
          const [lineIndex, newHeight] = lineIndexes;
          setTimeout(() => {
            setDisplayValues((prev) => {
              const updated = [...prev];
              updated[lineIndex] = newHeight;
              return updated;
            });
          }, index * inverseSpeed);
        }
      });

      runAnimation(animations);
    };

    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimationWithValueUpdate
    );
  };

  const toggleValues = () => {
    setShowValues((prev) => !prev);
  };

  return (
    <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff79_1px,#1d3557_1px)] bg-[size:40px_40px]">
      <div className="flex h-full justify-center">
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          <div className="h-[120px] mt-4 relative flex items-center justify-between w-full">
            <h1 className="text-gray-300 text-2xl font-light hidden md:flex">
              Visual Sort
            </h1>
            <div className="flex flex-wrap md:flex-row items-center justify-center gap-4">
              <Slider
                label="Speed"
                isDisabled={isSorting}
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <Slider
                label="Size"
                min={10}
                max={60}
                step={5}
                value={numLines}
                handleChange={(e) => setNumLines(Number(e.target.value))}
                isDisabled={isSorting}
              />
              <Select
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
              <button
                className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors"
                onClick={toggleValues}
                disabled={isSorting}
              >
                {showValues ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                )}
              </button>
              <button
                className="flex items-center justify-center"
                onClick={handlePlay}
              >
                {requiresReset ? (
                  <RxReset className="text-gray-400 h-8 w-8" />
                ) : (
                  <FaPlayCircle className="text-system-green60 h-8 w-8" />
                )}
              </button>
            </div>
            <div className="hidden sm:flex absolute top-[120%] left-0 w-full">
              <div className="flex w-full text-gray-400 p-4 rounded border border-system-purple20 bg-system-purple80 bg-opacity-10 gap-6">
                <div className="flex flex-col items-start justify-start w-3/4">
                  <h3 className="text-lg">
                    {sortingAlgorithmsData[selectedAlgorithm].title}
                  </h3>
                  <p className="text-sm text-grey-500 pt-2">
                    {sortingAlgorithmsData[selectedAlgorithm].description}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                  <h3 className="text-lg">Time Complexity</h3>
                  <div className="flex flex-col gap-2">
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Worst Case:</span>
                      <span>
                        {sortingAlgorithmsData[selectedAlgorithm].worstCase}
                      </span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Average Case:</span>
                      <span>
                        {sortingAlgorithmsData[selectedAlgorithm].averageCase}
                      </span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Best Case:</span>
                      <span>
                        {sortingAlgorithmsData[selectedAlgorithm].bestCase}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="line-container relative h-[calc(100vh-120px)] w-full"
            id="line-container"
          >
            <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="relative mx-0.5 flex flex-col items-center"
                >
                  <div
                    className="array-line shadow-lg rounded-sm"
                    style={{ width: `${lineWidth}px`, height: `${value}px` }}
                  >
                    {showValues && (
                      <span
                        className="text-gray-300 absolute bottom-full mb-1 z-10"
                        style={{
                          fontSize: `${lineWidth / 2.5}px`,
                          transform: "translateY(-100%)",
                          pointerEvents: "none",
                        }}
                      >
                        {displayValues[index]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
