const SITE_CONFIG = {
  heroLabel: '// Data Engineer · Interview Prep',
  heroTitle: 'Master <em>Plan</em>',
  heroSubtitle:
    'A structured, topic-by-topic breakdown across SQL, Python, PySpark, Data Warehousing, Cloud, Linux, and behavioral prep — built for DE interviews at FAANG, scale-ups, and remote-first companies.',
  authorName: 'Muhammad Taimoor Akmal',
  authorRole: 'Data Engineer · Update this in assets/js/data.js',
  footerSignature: 'Built by Muhammad Taimoor Akmal · DE Interview Prep',
  lastUpdated: 'April 2026',
  storageKey: 'de-master-plan-v2-progress',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/taimoorakmal', icon: '↗' },
    { label: 'GitHub', url: 'https://github.com/Mtaimoorakmal', icon: '↗' },
    { label: 'Resume', url: './resume.pdf', icon: '↗' }
  ],
  weeks: [
    { title: 'SQL fundamentals + 20 problems', focus: 'Core querying, joins, windows, interview patterns' },
    { title: 'Python 20 problems + Linux', focus: 'Sharpen language fundamentals, scripting, terminal confidence' },
    { title: 'PySpark fundamentals + programs', focus: 'Architecture, transformations, joins, performance' },
    { title: 'DW + Project + Behavioral + Research', focus: 'Modeling, storytelling, systems thinking, interview prep' }
  ],
  categories: {
    all: { label: 'All' },
    sql: { label: 'SQL', tag: 'SQL', tagClass: 't-sql', accent: 'var(--accent-sql)' },
    python: { label: 'Python', tag: 'Python', tagClass: 't-python', accent: 'var(--accent-python)' },
    spark: { label: 'PySpark', tag: 'PySpark', tagClass: 't-spark', accent: 'var(--accent-spark)' },
    dw: { label: 'Data Warehousing', tag: 'Data Warehousing', tagClass: 't-dw', accent: 'var(--accent-dw)' },
    proj: { label: 'Project / Cloud', tag: 'Cloud', tagClass: 't-proj', accent: 'var(--accent-proj)' },
    linux: { label: 'Linux', tag: 'Linux', tagClass: 't-linux', accent: 'var(--accent-linux)' },
    int: { label: 'Interview', tag: 'Interview', tagClass: 't-int', accent: 'var(--accent-int)' }
  }
};

const TRACKS = [
  {
    id: 'sql-concepts', cat: 'sql', tag: 'SQL', tagClass: 't-sql',
    title: 'SQL fundamentals — core concepts',
    subs: [
      { title: 'Querying basics', items: ['SELECT, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT', 'Aliases with AS — column and table aliases', 'DISTINCT — deduplication in SELECT', 'CASE WHEN / THEN / ELSE / END — conditional logic', 'NULL handling — COALESCE, NULLIF, IS NULL, IS NOT NULL'] },
      { title: 'JOINs', items: ['INNER JOIN — only matching rows', 'LEFT JOIN — all left rows + matched right', 'RIGHT JOIN — all right rows + matched left', 'FULL OUTER JOIN — all rows from both sides', 'CROSS JOIN — cartesian product', 'SELF JOIN — join a table with itself (org hierarchy)', 'Multi-condition JOINs with AND / OR'] },
      { title: 'Subqueries & CTEs', items: ['Subquery in SELECT, FROM, WHERE', 'Correlated subquery — references outer query per row', 'Non-correlated subquery — independent execution', 'WITH clause (CTE) — named temporary result sets', 'Recursive CTEs — hierarchical data traversal', 'CTEs vs subqueries — readability and performance'] },
      { title: 'Window functions', items: ['ROW_NUMBER() — unique sequential row number', 'RANK() — rank with gaps for ties', 'DENSE_RANK() — rank without gaps', 'NTILE(n) — divide rows into n buckets', 'LEAD() / LAG() — access next/prev row values', 'FIRST_VALUE() / LAST_VALUE() in a window', 'PARTITION BY and ORDER BY inside OVER()', 'ROWS BETWEEN / RANGE BETWEEN frame clause'] },
      { title: 'Aggregates & set ops', items: ['COUNT, SUM, AVG, MIN, MAX, COUNT(DISTINCT)', 'UNION vs UNION ALL — dedup vs no dedup', 'INTERSECT — rows in both result sets', 'EXCEPT / MINUS — rows in first but not second', 'String functions — CONCAT, SUBSTRING, TRIM, UPPER, LOWER, REPLACE', 'Date functions — DATE_DIFF, DATE_TRUNC, EXTRACT, CURRENT_DATE'] },
      { title: 'Performance & design', items: ['Indexes — clustered vs non-clustered vs composite', 'EXPLAIN / EXPLAIN ANALYZE — reading query plans', 'Normalization — 1NF, 2NF, 3NF, BCNF', 'Views vs Materialized Views — when to use which', 'Stored Procedures, Functions, Triggers', 'Transactions — ACID, BEGIN, COMMIT, ROLLBACK, SAVEPOINT'] }
    ]
  },
  {
    id: 'sql-problems', cat: 'sql', tag: 'SQL', tagClass: 't-sql',
    title: 'SQL — 25 recently asked interview problems',
    subs: [
      { title: 'Problems list (practice all on LeetCode / StrataScratch / DataLemur)', items: [
        '1. Second / Nth highest salary without LIMIT',
        '2. Department-wise highest earner (JOIN + window fn)',
        '3. Employees earning more than their manager (self-join)',
        '4. Duplicate records — find and count duplicates',
        '5. Cumulative sum / running total over time',
        '6. Consecutive login days streak (gap-and-island)',
        '7. Median salary — no built-in median function',
        '8. Top 3 products per category (window fn)',
        '9. Year-over-year revenue growth percentage',
        '10. User retention — Day 1, Day 7, Day 30 cohort',
        '11. Users who did action A but never action B',
        '12. Pivot rows to columns (conditional aggregation)',
        '13. 7-day moving average of daily revenue',
        '14. First and last purchase per customer',
        '15. Org hierarchy traversal — find all reports of a manager',
        '16. Gap in a sequence of IDs — find missing numbers',
        '17. Session boundary detection from clickstream',
        '18. Monthly active users (distinct users per month)',
        '19. Churn rate — users active last period but not this period',
        '20. Longest consecutive sequence in a column',
        '21. Friend suggestion — mutual friends count',
        '22. Funnel conversion rate between steps',
        '23. Rolling 3-month revenue by region',
        '24. Unpivot a wide table into long format',
        '25. Find all pairs with sum equal to a target value'
      ]}
    ]
  },
  {
    id: 'python-concepts', cat: 'python', tag: 'Python', tagClass: 't-python',
    title: 'Python — core concepts to sharpen',
    subs: [
      { title: 'Language fundamentals', items: ['List, dict, set comprehensions with conditions', 'Lambda functions — one-liner anonymous functions', 'map(), filter(), reduce() from functools', 'zip(), enumerate(), sorted() with key argument', 'Unpacking — *, ** in function args and assignments'] },
      { title: 'Functions & OOP', items: ['Decorators — wrapping functions with @syntax', 'Generators — yield, generator expressions, lazy evaluation', 'Classes, inheritance, dunder methods (__init__, __repr__, __len__)', 'Class methods, static methods, property decorators', 'Exception handling — try/except/finally, custom exceptions'] },
      { title: 'Data structures & stdlib', items: ['collections.defaultdict — auto-initializing dict', 'collections.Counter — frequency counting', 'collections.deque — O(1) popleft for queues', 'heapq — min-heap operations', 'itertools — combinations, permutations, groupby, chain', 'Type hints — List, Dict, Optional, Union, Tuple'] },
      { title: 'Pandas essentials', items: ['read_csv, read_json, read_parquet', 'groupby + agg + transform', 'merge / join — left, right, inner, outer', 'apply() with lambda or custom function', 'pivot_table, melt for reshaping', 'Handling nulls — fillna, dropna, interpolate'] }
    ]
  },
  {
    id: 'python-problems', cat: 'python', tag: 'Python', tagClass: 't-python',
    title: 'Python — 25 recently asked interview problems',
    subs: [
      { title: 'Problems list (practice on LeetCode + HackerRank)', items: [
        '1. Two Sum — hash map approach O(n)',
        '2. Reverse a string and a linked list',
        '3. Find duplicates in a list without extra space',
        '4. Anagram check — two strings',
        '5. Fibonacci — recursive, iterative, memoized',
        '6. Flatten a nested list (arbitrary depth)',
        '7. Flatten a nested dictionary with dot notation keys',
        '8. Group anagrams together from a list of strings',
        '9. Longest substring without repeating characters',
        '10. Sliding window maximum (deque approach)',
        '11. Merge two sorted arrays in O(n)',
        '12. Binary search — iterative and recursive',
        '13. Valid parentheses checker using a stack',
        '14. Count word frequency from a large text file',
        '15. Serialize and deserialize a JSON structure',
        '16. Implement an LRU cache using OrderedDict',
        '17. Rotate a matrix 90 degrees in-place',
        '18. All permutations of a string (backtracking)',
        '19. Detect a cycle in a directed graph (DFS)',
        '20. Write a timing decorator using functools.wraps',
        '21. Parse and aggregate CSV data with pandas',
        '22. Top K frequent elements using a heap',
        '23. Deep copy a nested structure without copy module',
        '24. Merge overlapping intervals',
        '25. Custom iterator class with __iter__ and __next__'
      ]}
    ]
  },
  {
    id: 'pyspark-fund', cat: 'spark', tag: 'PySpark', tagClass: 't-spark',
    title: 'PySpark fundamentals — architecture & core APIs',
    subs: [
      { title: 'Architecture', items: ['Driver program — SparkContext, SparkSession', 'Executors — tasks, cores, slots', 'Cluster managers — local, standalone, YARN, Kubernetes', 'DAG (Directed Acyclic Graph) — logical execution plan', 'Stages and tasks — how DAG splits into work', 'Lazy evaluation — transformations are NOT executed until an action', 'Catalyst optimizer — SQL query plan optimization', 'Tungsten engine — binary processing, off-heap memory'] },
      { title: 'RDDs (Resilient Distributed Datasets)', items: ['Creating — sc.parallelize(), sc.textFile()', 'Transformations (lazy) — map, flatMap, filter, distinct, union, intersection', 'Actions (eager) — collect, count, reduce, take, saveAsTextFile', 'Pair RDDs — (key, value) tuples', 'reduceByKey vs groupByKey — always prefer reduceByKey (less shuffle)', 'sortByKey, mapValues, flatMapValues', 'Broadcast variables — send large read-only data to all workers', 'Accumulators — distributed counters for monitoring'] },
      { title: 'DataFrames', items: ['SparkSession.read.csv/json/parquet/orc', 'Schema inference vs explicit StructType/StructField', 'select, filter, where, groupBy, agg, orderBy, limit', 'withColumn — add or replace a column', 'drop, rename, alias', 'Column functions — col(), lit(), when/otherwise, cast', 'String functions — upper, lower, trim, split, regexp_replace', 'Date functions — to_date, date_format, datediff, date_add', 'Handling nulls — fillna, dropna, replace, coalesce'] },
      { title: 'Spark SQL & Datasets', items: ['createOrReplaceTempView — register DF as SQL table', 'spark.sql("SELECT ...") — run SQL queries', 'explain() and explain("extended") — read query plans', 'Datasets — typed DataFrames (Scala/Java primarily)', 'Window functions in PySpark — Window.partitionBy().orderBy()', 'UDFs — Python UDF (slow), Pandas UDF (fast, vectorized)', 'Structured Streaming — readStream, writeStream, watermark'] }
    ]
  },
  {
    id: 'pyspark-programs', cat: 'spark', tag: 'PySpark', tagClass: 't-spark',
    title: 'PySpark — top 20 programs to practice',
    subs: [
      { title: 'Programs (build each from scratch)', items: [
        '1. Word count — RDD version and DataFrame version',
        '2. Read CSV → clean nulls → write to Parquet',
        '3. Join two large DataFrames and aggregate results',
        '4. Window function — running total per partition key',
        '5. Python UDF for custom string transformation',
        '6. Broadcast join — large fact + small dimension',
        '7. Incremental load simulation with watermark filter',
        '8. Read nested JSON and flatten schema with explode()',
        '9. Partition output DataFrame by date column',
        '10. groupBy + multiple simultaneous agg functions',
        '11. Detect and deduplicate records (dropDuplicates)',
        '12. Compute percentile with approxQuantile()',
        '13. Structured Streaming — read file source, write to console',
        '14. SCD Type 2 logic — track history for changed rows',
        '15. Read from multiple file formats and UNION ALL',
        '16. Cache a DataFrame and benchmark query time',
        '17. Explode array column into individual rows',
        '18. Schema evolution — read with mergeSchema=true',
        '19. Write partitioned data to S3 or GCS',
        '20. End-to-end pipeline — ingest → transform → agg → write'
      ]}
    ]
  },
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
  },
  {
    id: 'cloud', cat: 'proj', tag: 'Cloud', tagClass: 't-proj',
    title: 'Cloud services — AWS & GCP deep review',
    subs: [
      { title: 'AWS', items: ['S3 — storage classes, lifecycle rules, bucket policies, presigned URLs', 'Redshift — distribution keys (EVEN, ALL, KEY), sort keys, COPY command, VACUUM', 'Glue — crawlers, ETL jobs, Data Catalog, bookmarks for incremental', 'Lambda — event-driven compute, use in data pipelines', 'Kinesis Streams vs Firehose vs Analytics', 'Step Functions — orchestrating multi-step pipelines', 'IAM — roles, policies, cross-account access for data', 'EMR — Spark on AWS, cluster vs serverless', 'RDS vs DynamoDB — relational vs NoSQL trade-offs'] },
      { title: 'GCP', items: ['BigQuery — partitioning by date/column, clustering, slot reservation, BI Engine', 'Cloud Storage — storage classes, transfer service, lifecycle', 'Dataflow — Apache Beam managed, streaming + batch unification', 'Pub/Sub — message broker for streaming ingestion', 'Cloud Composer — managed Airflow, DAG deployment', 'Looker Studio — data source connectors, blended sources, calculated fields', 'Dataproc — Spark/Hadoop on GCP, ephemeral clusters', 'Cloud Functions / Cloud Run — serverless compute for pipelines'] }
    ]
  },
  {
    id: 'linux', cat: 'linux', tag: 'Linux', tagClass: 't-linux',
    title: 'Essential Linux commands for data engineers',
    subs: [
      { title: 'Navigation & file ops', items: ['ls -la, cd, pwd, mkdir -p, rm -rf, cp -r, mv, touch', 'find . -name "*.csv" -type f -mtime -7', 'chmod 755, chown user:group, ls -la for permissions', 'du -sh, df -h — disk usage at file and system level', 'ln -s — create symbolic links for data files'] },
      { title: 'Text processing (critical for DE)', items: ['grep -r -i -n "pattern" — recursive, case-insensitive, with line numbers', 'grep -v — invert match (exclude pattern)', 'awk \'{print $1, $3}\' — extract specific fields', 'awk -F"," — custom delimiter (CSV processing)', 'sed -i \'s/old/new/g\' — in-place substitution', 'cut -d"," -f1,3 — cut specific CSV columns', 'sort | uniq -c | sort -rn — frequency count pattern', 'wc -l — count lines (size a file fast)', 'head -100, tail -f — inspect files, follow logs in real-time'] },
      { title: 'Process & system ops', items: ['ps aux, top, htop — monitor running processes', 'kill -9 PID, killall process-name', 'nohup command & — run detached from terminal', 'crontab -e — schedule recurring jobs', 'env, export VAR=value — environment variables', 'ssh user@host, scp file user@host:/path', 'rsync -avz — efficient incremental file sync'] },
      { title: 'Pipeline tricks', items: ['pipe | — chain commands together', '> overwrite, >> append to file', 'tee — write to file AND stdout simultaneously', 'jq . file.json — parse and filter JSON on command line', 'curl -X GET url | jq — API call + parse', 'tar -czf archive.tar.gz dir/ — compress', 'zcat file.gz | grep pattern — search compressed file without extracting', 'screen -S session / tmux new -s session — persistent terminal sessions'] }
    ]
  },
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
