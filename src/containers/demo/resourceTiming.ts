/** Attempts to read the decoded body size of a resource using the Performance API */
export function getResourceSize(path: string): number | null {
  if (typeof performance === "undefined") null;

  const fullUrl =
    path.indexOf("://") === -1
      ? window.location.protocol + "//" + window.location.host + "/" + path
      : path;

  const entries = performance.getEntriesByName(fullUrl);
  if (entries.length === 0) {
    return null;
  }

  const lastEntry = entries[entries.length - 1];

  if (isResourceTiming(lastEntry)) {
    return lastEntry.decodedBodySize;
  }

  return null;
}

export function formatBytes(bytes: number): string {
  if (bytes >= 1048576) {
    return `${round(bytes / 1048576, 1)}MB`;
  }

  if (bytes >= 1024) {
    return `${round(bytes / 1024, 1)}KB`;
  }

  return `${bytes}B`;
}

function round(number: number, decimals = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
}

function isResourceTiming(x: unknown): x is PerformanceResourceTiming {
  return (
    typeof x === "object" &&
    x !== null &&
    (x as PerformanceResourceTiming).entryType === "resource"
  );
}
