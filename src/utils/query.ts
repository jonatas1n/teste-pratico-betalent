import { useLocation } from "react-router-dom";

export const toSearchString = (
  params: Record<string, string | number | boolean | null | undefined>
): string => {
  const searchParams = new URLSearchParams(
    Object.entries(params)
      .filter(([, value]) => value != null && value !== "")
      .map(([key, value]) => [key, String(value)])
  );
  return searchParams.toString() ? `?${searchParams}` : "";
};

export const useQueryParams = () => new URLSearchParams(useLocation().search);
