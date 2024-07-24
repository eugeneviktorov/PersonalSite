import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export function useIsMobileQuery() {
  const isMobileQuery = useMediaQuery({ maxWidth: 1024 });
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  return isMobile;
}
