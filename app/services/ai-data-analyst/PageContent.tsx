export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ask your data the question, in English, and get the chart back
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The two-week BI ticket queue is a structural problem</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most Malta SMEs and EU SaaS scaleups have the same data symptom: the warehouse exists, the dashboards exist, but every meaningful question ("why did NPS drop in week 32 specifically in our French cohort?") becomes a ticket that the analyst gets to in two weeks. By the time the answer arrives, the question has changed. The OARC AI Data Analyst exists to compress that loop from two weeks to thirty seconds.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It is a chat-style interface for non-technical operators — over Slack, Teams, or a web app — backed by your warehouse, a curated semantic layer, and an LLM grounded against the schema. The user asks the question in plain English; the agent writes the SQL, runs it, charts the result, and explains the contributing dimensions. The analyst stays in the loop for the hard questions, but the easy ones do not block any more.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why a semantic layer is the difference between this working and not working</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Every failed AI-analyst implementation we have seen failed for the same reason: no semantic layer. Without a curated, version-controlled definition of 'monthly recurring revenue', 'active customer', 'qualified meeting', the LLM hallucinates a definition every query and produces inconsistent answers across the team. The OARC implementation therefore ships with a dbt-based semantic layer as a non-negotiable, not an upgrade tier.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We co-author the metric definitions with your leadership in week one (typically 25-50 metrics for an SME, 100-200 for a scaleup), version them in your repository, and ground every LLM call against them. The result is that two operators asking 'what is our MRR' get the same number from the agent — and that number matches the board deck. That is the production threshold; below it, the deployment is a demo, not a tool.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where the data lives, and where it does not go</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              EU-region by default — BigQuery EU multi-region, Snowflake EU regions, AWS eu-central-1 for self-hosted Postgres. The LLM provider is Azure OpenAI West Europe by default, with AWS Bedrock eu-central-1 available for clients who prefer the AWS ecosystem. Customer warehouse data does not leave the EU. There is no third-party model training on customer queries — that is an explicit contract clause, not a marketing line.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Connection from the agent to the warehouse is least-privilege scoped to SELECT only — the analyst cannot UPDATE, DELETE, or DROP. Write actions belong elsewhere in the OARC platform (the Admin Agent, the SDR, the custom workflow). This separation is intentional: a compromised analyst credential cannot corrupt your data. We have not relaxed it for any client.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Investment and what is actually shipped</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Insights Pilot at €1,990/month is one data source, five named users, twenty saved dashboard tiles. Most pilots run for ninety days; about 80% convert to the Team Analyst tier. Team Analyst at €4,400/month is up to three sources, twenty-five users, the full semantic layer, the Slack and Teams interface, and a monthly executive briefing on what the team has been asking the data.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Data Platform Build at €18,000 is the project-shaped offer for clients who do not yet have a warehouse — we ship the warehouse (BigQuery, Snowflake, or Postgres), the dbt models, the semantic layer, the AI analyst, and a half-day analyst-training session in eight to ten weeks.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How this compares to Power BI, Tableau, and Looker</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Power BI, Tableau, and Looker are dashboarding tools — they require a trained analyst to build a dashboard, and they answer the questions the analyst anticipated. The AI Data Analyst is a question-answering interface for the questions you did not anticipate. The two coexist: most clients keep Looker for the standing dashboards (board pack, weekly ops review) and use the AI agent for the ad-hoc questions in between.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We integrate with all three — the agent can chart in Looker, embed answers in Tableau dashboards, and read from Power BI semantic models. We deliberately do not try to replace your dashboard tool; replacement is a multi-quarter project that derails the actual benefit, which is fast answers to changing questions.
            </p>
          </div>
        </div>
      </section>
    );
  }
  