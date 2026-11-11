import RelatedServices from "@/components/RelatedServices";

export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Compliance review at the speed of read, not the speed of staff
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Malta-regulated businesses deploy a compliance auditor</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Malta-licensed iGaming operators, MFSA-regulated investment firms, and EU-passported fintechs all share the same growth-stage problem: regulatory work scales linearly with revenue, but headcount cannot. Reviewing supplier contracts, T&Cs, KYC files, marketing creative, and policy updates is high-stakes, repetitive reading work — exactly the shape of task an LLM-grounded auditor can compress 80% of, leaving the MLRO and the DPO for the judgement calls.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              The OARC AI Compliance Auditor is not a regulator-replacement and not a magic-button substitute for a compliance team. It is a force multiplier — the first-pass read that flags the deviations from your policy library, the missing AML evidence, the mis-classified marketing claim — so the human compliance function spends its time on the 20% that needs human attention.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What it covers, in real Malta-regulated contexts</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Production deployments cover supplier contract review against approved templates (catching off-template indemnity caps, jurisdiction clauses, data-processing addenda missing the EU SCC reference), AML/KYC file consistency checks (matching declared source-of-funds against documentary evidence, flagging incomplete UBO chains), marketing creative review (catching unsubstantiated claims, missing fair-presentation language for iGaming bonuses), and policy library red-flag matching across long-form documents.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Above that, continuous tier deployments monitor MFSA circulars, MGA directives, IDPC guidance, and the broader EU regulator stream (ESMA, EBA, EIOPA) for changes that affect your specific permission set. We map each change to the policies you have already approved and produce a delta report your compliance committee can vote on, instead of a 200-page weekly summary that no-one reads.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Architecture, accuracy, and audit trail</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every deployment runs in a customer-isolated tenant with EU-only inference (Azure OpenAI West Europe by default; private LLM hosting on AWS eu-central-1 for clients who require it). The auditor uses retrieval-augmented generation against your policy library and your historical reviewed corpus, so every flag is anchored to a citation: 'this clause deviates from approved supplier-template clause 7.3, last reviewed by [reviewer] on [date]'.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We benchmark every deployment against 100 historical compliance reviews before go-live, and we will not promote a model into production below 96% precision and 99% recall on the flagged-item class. The audit log records every input, every output, every human approval, and every override, in a format MFSA examiners and external auditors are comfortable reading.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing tiers and engagement model</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Document Auditor at €1,490/month handles up to 1,000 documents per month with one rule pack and is the typical entry point for mid-size Malta-licensed operators. Continuous Compliance at €2,990/month adds the regulatory change monitoring and the weekly delta report. Regulated Enterprise at €6,500/month is the on-prem-or-private-VPC tier for large MFSA / MGA operators with strict data-residency requirements.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every tier includes the rule-pack tuning, the human-reviewer approval workflow, the audit log, and the weekly tuning calls during the first 90 days. We sign a DPA, an NDA, and a non-disclosure schedule before any documents are shared, and IP in the rule packs assigns to the client at SOW close.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How it slots in alongside your compliance team</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              MLROs and DPOs we work with describe the auditor as 'the analyst we could never afford'. The agent does the document inventory, the consistency check, the policy mapping; the human compliance team does the remediation decisions, the regulator correspondence, and the board reporting. Most teams reach 70-80% deflection of routine review work within ninety days, and that capacity gets reinvested in actual compliance programme work — risk assessments, monitoring plans, training rollouts — rather than re-reading a 40-page ISDA addendum at 9pm.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We deliberately do not market this as an 'AI MLRO' or an 'AI DPO'. Those are regulated roles requiring registered humans. The auditor is the staff augmentation layer that lets your registered humans operate at the scale your business now requires.
            </p>
          </div>
        </div>

      <RelatedServices slug="/services/ai-compliance-auditor" />
      </section>
    );
  }
  