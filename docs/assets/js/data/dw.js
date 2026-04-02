const TRACKS_DW = [
  {
    id: 'dw-concepts', cat: 'dw', tag: 'Data Warehousing', tagClass: 't-dw',
    title: 'Data warehousing — modeling & architecture',
    subs: [
      { title: 'Dimensional modeling', items: ['Star schema — fact table + denormalized dimensions', 'Snowflake schema — normalized dimensions', 'Galaxy schema — multiple fact tables sharing dimensions', 'Fact table types — additive, semi-additive, non-additive', 'Dimension types — conformed, degenerate, junk, role-playing', 'Grain of a fact table — the most atomic level of measurement', 'Surrogate keys vs natural keys — why surrogate keys are preferred'] },
      { title: 'Slowly Changing Dimensions (SCD)', items: ['SCD Type 0 — no changes allowed', 'SCD Type 1 — overwrite (no history)', 'SCD Type 2 — add new row per change (full history)', 'SCD Type 3 — add column for previous value', 'SCD Type 4 — separate history table', 'SCD Type 6 — hybrid of 1+2+3'] },
      { title: 'ETL / ELT patterns', items: ['ETL vs ELT — transform before or after loading', 'Batch vs streaming — trade-offs and when to use which', 'Full load vs incremental load vs CDC', 'Change Data Capture — log-based, trigger-based, timestamp-based', 'Idempotency — rerunning a pipeline should produce same result', 'Data lineage — tracking where data came from', 'Orchestration — Airflow DAGs, Cloud Composer, Step Functions'] },
      { title: 'Modern data stack', items: ['Lakehouse architecture — tables directly on object storage', 'Delta Lake / Apache Iceberg / Apache Hudi — ACID on data lake', 'Medallion architecture — Bronze (raw), Silver (clean), Gold (aggregated)', 'Data Vault 2.0 — Hubs, Links, Satellites', 'Column-oriented storage — why Parquet/ORC is faster for analytics', 'Partitioning and clustering in BigQuery, Snowflake, Redshift', 'Materialized views — pre-computed query results'] }
    ]
  },
  {
    id: 'dw-model', cat: 'dw', tag: 'Data Warehousing', tagClass: 't-dw',
    title: 'Data model in your project — prep to explain',
    subs: [
      { title: 'Be ready to walk through', items: ['Business context — what decisions does this data enable?', 'Schema overview — tables, relationships, naming conventions', 'Fact tables — what they measure, grain, key metrics', 'Dimension tables — what descriptive attributes they hold', 'Why this model was chosen (star vs flat vs hybrid)', 'How SCD is implemented — which dimensions have history', 'Surrogate key strategy and generation approach', 'Incremental load logic — how new/updated data flows in'] },
      { title: 'Common follow-up questions', items: ['Why not normalize/denormalize further?', 'How do you handle a production schema change?', 'What happens if a dimension record needs to track history retroactively?', 'How is late-arriving data handled?', 'How is data quality enforced at the model level?', 'What would you change about the current model?'] }
    ]
  }
];
