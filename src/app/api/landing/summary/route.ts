export async function GET() {
  const response = await fetch(
    "https://app.harborfinance.io/api/landing/summary",
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch landing summary",
        status: response.status,
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
