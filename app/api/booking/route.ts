import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Received:", body);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzTLjozYilkebN_pRK2qyog7dHyjiW6SxLArYkhwlRpruafpJ7HDoDK66cssk0MlCAt/exec",
      
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    console.log("Status:", response.status);

    const text = await response.text();

    console.log("Response:", text);

    return NextResponse.json({
      success: true,
      status: response.status,
      text,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json({
      success: false,
      error: String(err),
    });
  }
}