import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      bookingId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment signature",
        },
        { status: 400 }
      );
    }

    const appsScriptResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbzTLjozYilkebN_pRK2qyog7dHyjiW6SxLArYkhwlRpruafpJ7HDoDK66cssk0MlCAt/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "payment_success",

          bookingId,

          razorpayPaymentId: razorpay_payment_id,

          signature: razorpay_signature,
        }),
      }
    );

    const appsScriptResult = await appsScriptResponse.json();

    console.log("Apps Script Update:", appsScriptResult);


    return NextResponse.json({
      success: true,

      bookingId,

      appsScriptResult,

      razorpay_payment_id,
      razorpay_order_id,
    });
    
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Verification failed",
      },
      { status: 500 }
    );
  }
}