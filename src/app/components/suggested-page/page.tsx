"use client";

import { useState } from "react";

export default function SuggestedPage({ child }){

  const [suggested, setSuggested] = useState (false);

  return (
    <div>
      <p>{child}</p>
    </div>
  );
};