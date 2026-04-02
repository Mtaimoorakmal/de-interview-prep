const TRACKS_SQL = [
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
  }
];
