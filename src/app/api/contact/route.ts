// Required env variables (add to .env.local):
//   AIRTABLE_API_KEY=...
//   AIRTABLE_BASE_ID=...
//   AIRTABLE_TABLE_NAME=...

export async function POST(request: Request) {
  try {
    const { name, businessName, email, phone, details } = await request.json();

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    if (!apiKey || !baseId || !tableName) {
      return Response.json(
        { success: false, error: "Missing Airtable environment configuration" },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Name: name,
            "Business Name": businessName,
            Email: email,
            Phone: phone,
            Details: details,
          },
        }),
      }
    );

    if (!res.ok) {
      const error = await res.text();
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ success: false, error }, { status: 500 });
  }
}
