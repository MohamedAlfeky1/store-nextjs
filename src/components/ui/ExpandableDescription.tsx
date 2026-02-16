"use client";

import { useState } from "react";

interface ExpandableDescriptionProps {
  text: string;
  maxChars?: number;
}

export default function ExpandableDescription({
  text,
  maxChars = 180,
}: ExpandableDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) {
    return null;
  }

  const isLong = text.length > maxChars;
  const displayText =
    expanded || !isLong
      ? text
      : `${text.slice(0, maxChars).trimEnd()}...`;

  return (
    <div className="space-y-2">
      <p className="mt-4 text-lg text-gray-600 leading-relaxed italic">
        {displayText}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

