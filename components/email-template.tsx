import * as React from "react";

export function EmailTemplate({ fullName, email, message }: { fullName: string; email: string; message: string }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <h2>RAYZN • İletişim</h2>
      <p><b>Ad Soyad:</b> {fullName}</p>
      <p><b>E-posta:</b> {email}</p>
      <p><b>Mesaj:</b></p>
      <pre style={{ whiteSpace: "pre-wrap" }}>{message}</pre>
    </div>
  );
}
