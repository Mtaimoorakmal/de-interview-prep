const TRACKS_INTERVIEW = [
  {
    id: 'roles', cat: 'int', tag: 'Interview', tagClass: 't-int',
    title: 'Roles & responsibilities — articulate your scope',
    subs: [
      { title: 'What to be specific about', items: ['Day-to-day ownership — pipelines, dashboards, data quality', 'Team lead scope — who you guide, what decisions you make', 'Stakeholder interaction — CEO sessions, cross-dept data requests', 'Tools and services you own vs just use', 'Pipeline SLAs you are responsible for', 'Incidents you have handled end-to-end', 'Process improvements you initiated', 'Mentoring or onboarding of other team members'] },
      { title: 'Differentiation from a junior DE', items: ['You ran CEO-level discovery sessions independently', 'You mapped KPIs across 4 departments from scratch', 'You made architectural/tool decisions on the dashboard', 'You coordinated data access with Admin and Operations', 'Evidence of end-to-end ownership, not just task execution'] }
    ]
  },
  {
    id: 'interview-q', cat: 'int', tag: 'Interview', tagClass: 't-int',
    title: 'Common interview questions — technical & behavioral',
    subs: [
      { title: 'Behavioral (prepare STAR answers for each)', items: [
        'Tell me about yourself — 2-minute structured pitch',
        'Most challenging data engineering problem you solved',
        'Time you had to learn something quickly under pressure',
        'Disagreement with a teammate or stakeholder — how resolved?',
        'How you handle competing priorities with tight deadlines',
        'A pipeline failure — what happened, your response, what you changed',
        'Biggest measurable impact you delivered in your current role',
        'Why are you looking for new opportunities?'
      ]},
      { title: 'Technical depth questions', items: [
        'Design a data pipeline from scratch for X use case (system design)',
        'How would you handle duplicate records in a production pipeline?',
        'Walk me through how you would optimize a slow SQL query',
        'How do you ensure and enforce data quality in a pipeline?',
        'Difference between Spark RDD, DataFrame, and Dataset',
        'When would you choose streaming over batch and why?',
        'How would you design a real-time operational dashboard?',
        'Explain partitioning vs clustering in BigQuery or Redshift',
        'How do you handle schema evolution in a production pipeline?',
        'Your experience with workflow orchestration (Airflow / Composer)',
        'How would you backfill 2 years of historical data safely?',
        'Difference between ETL and ELT — when would you choose each?'
      ]}
    ]
  },
  {
    id: 'research', cat: 'int', tag: 'Interview', tagClass: 't-int',
    title: 'Research interview experiences — before each application',
    subs: [
      { title: 'Where to look', items: ['Glassdoor — "[Company] data engineer interview" filter by most recent', 'LeetCode discuss — filter by company tag for SQL + Python problems', 'GeeksForGeeks — company-specific interview prep pages', 'LinkedIn — message people who work/worked there (be specific, be brief)', 'Blind — anonymous honest takes on interview difficulty and culture', 'Medium / Substack — search "data engineer interview [company] 2024"'] },
      { title: 'What to extract from each experience', items: ['Which SQL or Python problems were asked verbatim?', 'Was there a system design / architecture round?', 'Number of rounds and format (live coding, take-home, discussion)?', 'Difficulty level — easy LeetCode or hard custom problems?', 'Were there take-home assignments with a dataset?', 'What soft skills and communication were tested?', 'Red flags or unexpected topics mentioned by the candidate'] }
    ]
  }
];
