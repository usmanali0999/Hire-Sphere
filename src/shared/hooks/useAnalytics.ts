import { useEffect } from "react"
import { featureFlags } from "@/shared/utils/featureFlags"

export function useAnalytics(page: string) {
  useEffect(() => {
    if (!featureFlags.enableAnalytics) return

    console.log("Analytics page view:", page)
    // production me yahan GA / Posthog / Segment lagta
  }, [page])
}