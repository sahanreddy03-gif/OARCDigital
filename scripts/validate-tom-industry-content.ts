import { tomBriefPages } from "../app/tom/tom-v2-data";

const expectedSlugs = [
  "hospitality",
  "sales",
  "healthcare",
  "finance-insurance",
  "real-estate",
  "legal",
  "logistics",
  "home-services",
  "education",
  "government",
] as const;

const requiredFieldsByBlock: Record<number, string[]> = {
  1: ["kicker", "headline", "lead", "buttons"],
  2: ["kicker", "statement (display type)", "sub-line (mono)"],
  3: ["headline", "lead"],
  4: ["headline", "caption above", "caption below"],
  5: ["headline", "body", "value line (mono)"],
  6: ["headline", "body", "body 2", "value line (mono)"],
  7: ["headline", "lead"],
  8: ["kicker", "headline"],
  9: ["kicker", "body", "punch (display type)", "close headline", "close lead", "buttons"],
};

const failures: string[] = [];

if (tomBriefPages.length !== expectedSlugs.length) {
  failures.push(`Expected ${expectedSlugs.length} industry pages, found ${tomBriefPages.length}.`);
}

for (const slug of expectedSlugs) {
  const page = tomBriefPages.find((candidate) => candidate.slug === slug);
  if (!page) {
    failures.push(`Missing industry page: ${slug}.`);
    continue;
  }

  if (!page.metaTitle || !page.metaDescription) {
    failures.push(`${slug}: metadata is incomplete.`);
  }

  if (page.domainBrief.length < 7) {
    failures.push(`${slug}: domain brief is incomplete.`);
  }

  for (let number = 1; number <= 9; number += 1) {
    const block = page.blocks.find((candidate) => candidate.number === number);
    if (!block) {
      failures.push(`${slug}: missing block ${number}.`);
      continue;
    }

    const fields = block.fields as Record<string, string>;
    for (const field of requiredFieldsByBlock[number]) {
      if (!fields[field]?.trim()) {
        failures.push(`${slug}: block ${number} is missing "${field}".`);
      }
    }

    if (number === 3 && block.list.length < 8) {
      failures.push(`${slug}: block 3 needs at least eight industry-specific capabilities.`);
    }
    if (number === 7 && block.list.length !== 4) {
      failures.push(`${slug}: block 7 must contain four human-control limits.`);
    }
    if (number === 8 && block.list.length !== 4) {
      failures.push(`${slug}: block 8 must contain four specialist agents.`);
    }
    if (number !== 7 && !block.visual) {
      failures.push(`${slug}: block ${number} is missing its production visual brief.`);
    }
  }
}

for (const number of [1, 2, 3, 4, 5, 6, 8, 9]) {
  const blockContent = tomBriefPages.map((page) => {
    const block = page.blocks.find((candidate) => candidate.number === number);
    return JSON.stringify({
      fields: block?.fields ?? {},
      list: block?.list ?? [],
    });
  });
  if (new Set(blockContent).size !== tomBriefPages.length) {
    failures.push(`Block ${number} contains duplicated page copy; all ten versions must remain distinct.`);
  }
}

if (failures.length > 0) {
  console.error("Tom industry content validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Tom industry content validation passed: 10 distinct pages, 90 complete blocks.");