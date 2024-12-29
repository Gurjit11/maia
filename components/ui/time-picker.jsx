"use client";

import React, { useRef } from "react";
import { TimeValue, AriaTimeFieldProps, useLocale, useTimeField, useDateSegment } from "react-aria";
import { TimeFieldStateOptions, useTimeFieldState, DateFieldState, DateSegment as IDateSegment } from "react-stately";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const TimePicker = (props) => {
  return (
    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
      <TimeField {...props} />
      <Clock className="text-[#E29578] w-5 h-5" />
    </div>
  );
};

TimePicker.displayName = "TimePicker";

export { TimePicker };

function TimeField(props) {
  const ref = useRef(null);
  const { locale } = useLocale();
  const state = useTimeFieldState({ ...props, locale });
  const { fieldProps } = useTimeField(props, state, ref);

  return (
    <div
      {...fieldProps}
      ref={ref}
      className={cn(
        "inline-flex h-10 w-full flex-1 bg-transparent text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        props.isDisabled ? "cursor-not-allowed opacity-50" : ""
      )}
    >
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  );
}

function DateSegment({ segment, state }) {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={cn(
        "focus:rounded-[2px] focus:bg-accent focus:text-accent-foreground focus:outline-none",
        segment.type !== "literal" ? "px-[1px]" : "",
        segment.isPlaceholder ? "text-muted-foreground" : ""
      )}
    >
      {segment.text}
    </div>
  );
}

export { DateSegment };