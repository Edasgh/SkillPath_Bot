import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    return NextResponse.json({
      apiKey: process.env.NEXT_APP_OPENAI_API_KEY,
    },{status:200});
  } catch (error) {
    return NextResponse.json({ message: "Error" },{status:500});
  }
};
