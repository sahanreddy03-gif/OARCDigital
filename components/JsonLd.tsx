import React from "react";

export default function JsonLd({
  data,
  id,
}: {
  data: object | object[];
  id?: string;
}) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
