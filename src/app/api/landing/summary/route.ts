const UPSTREAM_URL = "https://app.harborfinance.io/api/landing/summary";

let cachedPayload: string | null = null;
let cachedAt = 0;
const CACHE_TTL_MS = 60_000;

export async function GET() {
  const now = Date.now();

  if (cachedPayload && now - cachedAt < CACHE_TTL_MS) {
    return new Response(cachedPayload, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  }

  try {
    const response = await fetch(UPSTREAM_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Upstream request failed: ${response.status}`);
    }

    const data = await response.json();
    const payload = JSON.stringify(data);
    cachedPayload = payload;
    cachedAt = now;

    return new Response(payload, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    if (cachedPayload) {
      return new Response(cachedPayload, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      });
    }

    return new Response(
      JSON.stringify({
        error: "Failed to fetch landing summary",
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
