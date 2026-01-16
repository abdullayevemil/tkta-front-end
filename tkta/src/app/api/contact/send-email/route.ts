import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, fullName, contactNumber, content, type } = body;

  const htmlContent = `
<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      font-family: Calibri, Arial, sans-serif;
      font-size: 12pt;
      color: #000;
      background-color: #f9f9f9;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      background: #ffffff;
      padding: 24px;
      border-radius: 6px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    h2 {
      margin-top: 0;
      color: #1a1a1a;
    }
    p {
      margin: 8px 0;
    }
    .label {
      font-weight: bold;
    }
    .message {
      margin-top: 16px;
      padding: 12px;
      background: #f2f2f2;
      border-left: 4px solid #0563c1;
      white-space: pre-wrap;
    }
    .footer {
      margin-top: 24px;
      font-size: 10pt;
      color: #666;
    }
  </style>
</head>

<body>
  <div class="container">
    <h2>${type}</h2>

    <p><span class="label">Ad və Soyad:</span> ${fullName}</p>
    <p><span class="label">E-poçt:</span> ${email}</p>
    <p><span class="label">Əlaqə nömrəsi:</span> ${
      contactNumber || "Qeyd edilməyib"
    }</p>
    <p><span class="label">Göndərilmə tarixi:</span> ${new Date().toLocaleString(
      "az-AZ"
    )}</p>

    <div class="message">
      ${content}
    </div>

    <div class="footer">
      Bu mesaj TKTA veb saytının əlaqə forması vasitəsilə göndərilmişdir.
    </div>
  </div>

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
    )}" }&to=[{"email" : "info@tkta.edu.az", "name":"TKTA"},{"email":"${encodeURIComponent(
      email
    )}", "name": "${encodeURIComponent(
      fullName
    )}"}]&subject=${type}&htmlContent=${encodeURIComponent(
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
      return NextResponse.json(
        { error: "Error sending email" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.log("Error in send-email route:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
