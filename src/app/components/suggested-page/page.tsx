"use client";

import { useState } from "react";

interface SuggestedPageProps {
  child: Promise<any>;
}

const SuggestedPage: React.FC<SuggestedPageProps> = ({ child }) => {
  const [suggested, setSuggested] = useState(false);

  return (
    <div>
      <p>{child}</p>
    </div>
  );
};

export default SuggestedPage;