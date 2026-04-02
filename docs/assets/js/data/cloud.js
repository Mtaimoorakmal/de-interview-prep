const TRACKS_CLOUD = [
  {
    id: 'cloud', cat: 'proj', tag: 'Cloud', tagClass: 't-proj',
    title: 'Cloud services — AWS & GCP deep review',
    subs: [
      { title: 'AWS', items: ['S3 — storage classes, lifecycle rules, bucket policies, presigned URLs', 'Redshift — distribution keys (EVEN, ALL, KEY), sort keys, COPY command, VACUUM', 'Glue — crawlers, ETL jobs, Data Catalog, bookmarks for incremental', 'Lambda — event-driven compute, use in data pipelines', 'Kinesis Streams vs Firehose vs Analytics', 'Step Functions — orchestrating multi-step pipelines', 'IAM — roles, policies, cross-account access for data', 'EMR — Spark on AWS, cluster vs serverless', 'RDS vs DynamoDB — relational vs NoSQL trade-offs'] },
      { title: 'GCP', items: ['BigQuery — partitioning by date/column, clustering, slot reservation, BI Engine', 'Cloud Storage — storage classes, transfer service, lifecycle', 'Dataflow — Apache Beam managed, streaming + batch unification', 'Pub/Sub — message broker for streaming ingestion', 'Cloud Composer — managed Airflow, DAG deployment', 'Looker Studio — data source connectors, blended sources, calculated fields', 'Dataproc — Spark/Hadoop on GCP, ephemeral clusters', 'Cloud Functions / Cloud Run — serverless compute for pipelines'] }
    ]
  }
];
