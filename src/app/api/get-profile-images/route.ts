export async function GET() {
  const res = await fetch(
    "https://mock.staging.bidcom.com.ar/api/challenge/images"
  );
  const data = await res.json();

  return Response.json(data);
}
