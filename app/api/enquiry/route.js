import { appendFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Send the enquiry form." }, { status: 400 });
  }

  if (data.company) return Response.json({ ok: true });

  const student = String(data.student || "").trim();
  const parent = String(data.parent || "").trim();
  const mobile = String(data.mobile || "").trim();
  const course = String(data.course || "").trim();
  const message = String(data.message || "").trim();

  if (!student || !parent || !mobile || !course) {
    return Response.json({ ok: false, error: "Please fill student name, parent name, mobile number, and course." }, { status: 422 });
  }
  if (!/^[0-9+\-\s]{8,16}$/.test(mobile)) {
    return Response.json({ ok: false, error: "Please enter a valid mobile number." }, { status: 422 });
  }

  const line = [
    new Date().toISOString(),
    student.replace(/\s+/g, " "),
    parent.replace(/\s+/g, " "),
    mobile.replace(/\s+/g, " "),
    course.replace(/\s+/g, " "),
    message.replace(/\s+/g, " "),
  ].join(" | ");

  await appendFile(path.join(process.cwd(), "enquiries.log"), `${line}\n`, "utf8");
  return Response.json({ ok: true });
}
