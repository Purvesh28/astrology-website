import { PACKAGES } from "@/lib/packages";
import razorpay from "@/lib/razorpay";
import { NextRequest, NextResponse } from "next/server";

function generateBookingId() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const random = Math.floor(1000 + Math.random() * 9000);

  return `BK${year}${month}${day}${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Key ID:", process.env.RAZORPAY_KEY_ID);
    console.log(
      "Secret Loaded:",
      !!process.env.RAZORPAY_KEY_SECRET
    );
    const bookingId = generateBookingId();

    const selectedPackage = PACKAGES[body.packageId as keyof typeof PACKAGES];

    if (!selectedPackage) {
        return Response.json(
            {
                success: false,
                error: "Invalid package selected.",
            },
            { status: 400 }
        );
    }
    

    const order = await razorpay.orders.create({
      amount: selectedPackage.amount * 100, // Razorpay uses paise
      currency: "INR",
      receipt: bookingId,
      notes: {
        bookingId,
        packageId: selectedPackage.id,
        customer: `${body.firstName} ${body.lastName}`,
      },
    });


    const bookingData = {
      action: "create",

      bookingId,

      firstName: body.firstName,
      lastName: body.lastName,
      dob: body.dob,
      birthPlace: body.birthPlace,
      birthTime: body.birthTime,
      phone: body.phone,

      packageId: selectedPackage.id,
      packageName: selectedPackage.name,
      amount: selectedPackage.amount,
      currency: "INR",

      razorpayOrderId: order.id,
      razorpayPaymentId: "",
      signature: "",

      paymentStatus: "Pending",
      paymentDate: "",

      message: body.message,
    };
    


    

    console.log("Booking:", bookingData); 
    console.log("Selected Package:", selectedPackage);

    console.log("Sending to Apps Script:");
    console.log(JSON.stringify(bookingData, null, 2));
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzTLjozYilkebN_pRK2qyog7dHyjiW6SxLArYkhwlRpruafpJ7HDoDK66cssk0MlCAt/exec",
      
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    console.log("Status:", response.status);

    const text = await response.text();

    console.log("Response:", text);

    return NextResponse.json({
      success: true,

      bookingId,

      orderId: order.id,

      amount: order.amount,

      currency: order.currency,

      key: process.env.RAZORPAY_KEY_ID,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json({
      success: false,
      error: String(err),
    });
  }
}
