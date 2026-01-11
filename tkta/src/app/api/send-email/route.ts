import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const role = session.user.role;

  if (role !== "admin" && role !== "superadmin" && role !== "user") {
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }
  
  const body = await req.json();
  const { meetingDate, meetingTime, meetingLink, email, name } = body;

  const htmlContent = `
  <!DOCTYPE html>
<html lang="en-US">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>
    </title>
    <style>
        body {
            font-family: 'Times New Roman';
            font-size: 12pt
        }

        p {
            margin: 0pt
        }

        span.Hyperlink {
            text-decoration: underline;
            color: #0563c1
        }

        @media (max-width: 900px) {
            img {
                max-width: 100%;
                height: auto;
            }

            .table-container {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }

            table {
                width: 100%;
                border-collapse: collapse;
            }

            td,
            th {
                padding: 8px;
                text-align: left;
                border: 1px solid #ddd;
            }
        }
    </style>
</head>

<body>
    <p style="margin-bottom:14pt;"><strong>H&ouml;rmətli m&uuml;raciət&ccedil;i,</strong></p>
    <p style="font-size:11pt; font-family:Calibri; color:#000000; margin-bottom:14pt;">
  Sizə bildiririk ki, <strong>${meetingDate}</strong>-ci il tarixində, saat <strong>${meetingTime}</strong>-da onlayn video görüşün keçirilməsi planlaşdırılmışdır.
  </p>

  <p style="font-size:11pt; font-family:Calibri; color:#000000; margin-bottom:14pt;">
  Video görüşdə iştirak etmək üçün qeyd olunan vaxtdan <strong>ən azı 5 dəqiqə əvvəl</strong> daxil olmağınız xahiş olunur.
  </p>

  <p style="font-size:11pt; font-family:Calibri; color:#000000; margin-bottom:14pt;">
  Nəzərinizə çatdırırıq ki, video görüşə qoşulmazdan əvvəl aşağıdakı keçiddən istifadə edərək verilmiş QR kodu oxudub <strong>SİMA identifikasiya (autentifikasiya) xidmətindən</strong> uğurla keçməyiniz tələb olunur.
  </p>

  <p style="font-size:11pt; font-family:Calibri; color:#000000; margin-bottom:14pt;">
  <strong>Video görüş linki:</strong><br/>
  <a href="${meetingLink}" target="_blank" style="color:#0563c1; text-decoration:underline;">
  ${meetingLink}
  </a>
  </p>

    <p style="font-size:11pt;"><span style="font-family:Calibri;">&nbsp;</span></p>
    <p style="font-size:11pt;"><span style="font-family:Calibri; color:#1f497d;">&nbsp;</span></p>
    <p><strong>H&ouml;rmətlə,</strong></p>
    <p><strong>Təhsildə Keyfiyyət Təminatı Agentliyi</strong></p>
    <p><img src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1765806408/image001-1_vjbz5m.png" alt="TKTA Logo" width="590" styles="width:100%;"/></p>
    <p>AZ1060, Bakı, Azərbaycan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<strong>Telefon:</strong> (+994 12) 599-11-55 &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://urldefense.com/v3/__http:/www.tkta.edu.az__;!!E1R1dd1bLLODlQ4!C-eMVIuZtJFUzsofqOc98wW_yTFB6OwkDDqm5aLn6JS0l1KdMNra13QycsVry2aJKSX_lktIsnbjkapw_ixi0IE$" style="text-decoration:none;"><span class="Hyperlink" style="font-weight:bold; color:#0000ff;">www.tkta.edu.az</span></a></p>
    <p>Qara Qarayev prospekti 2B.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <strong>E-po&ccedil;t:</strong> <a href="mailto:info@tkta.edu.az" style="text-decoration:none;"><span class="Hyperlink" style="color:#0000ff;">info@tkta.edu.az</span></a></p>
    <p>&nbsp;</p> 
  </body>

</html>
  `;

  const authUrl =
    process.env.EMAIL_SERVICE_URL +
    `/auth/login?email=${encodeURIComponent(
      process.env.EMAIL_USER || ""
    )}&password=${encodeURIComponent(process.env.EMAIL_PASSWORD || "")}`;

  const emailUrl =
    process.env.EMAIL_SERVICE_URL +
    `/send-email-2?sender={"name":"Təhsildə Keyfiyyət Təminatı Agentliyi", "email": "${encodeURIComponent(
      process.env.SENDER_EMAIL || ""
    )}" }&to=[{"email":"${encodeURIComponent(
      email
    )}", "name": "${encodeURIComponent(
      name
    )}"}]&subject=Video zənginə dəvət&htmlContent=${encodeURIComponent(
      htmlContent
    )}`;

  let bearerToken = "";

  try {
    const authRes = await fetch(authUrl, {
      method: "POST",
    });

    if (!authRes.ok) throw new Error("Login failed");

    const authData = await authRes.json();
    bearerToken = authData.access_token;

    const emailRes = await fetch(emailUrl, {
      method: "POST",
      headers: {
        Authorization: `bearer ${bearerToken}`,
      },
    });

    if (emailRes.status === 201) {
      return NextResponse.json({ success: true, emailRes });
    } else {
      return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }

  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
