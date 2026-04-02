const TRACKS_PYSPARK = [
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
  }
];
