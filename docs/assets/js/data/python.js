const TRACKS_PYTHON = [
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
    id: 'python-ingestion', cat: 'python', tag: 'Python', tagClass: 't-python',
    title: 'Python — files, APIs, and data ingestion',
    subs: [
      { title: 'File handling essentials', items: ['open(), read(), write(), append modes', 'Use with open(...) context managers safely', 'Read text vs binary files correctly', 'Use pathlib for paths instead of hard-coded strings', 'Read large files line by line to avoid memory spikes', 'CSV handling with csv module and DictReader', 'JSON read/write with json.load(), json.loads(), json.dump()', 'Work with parquet through pandas read_parquet()/to_parquet()', 'Handle encodings like utf-8, utf-8-sig, latin-1', 'Work with compressed files such as .gz and .zip'] },
      { title: 'API calling patterns', items: ['requests.get() / post() with params, headers, and auth', 'Validate status codes with response.raise_for_status()', 'Parse JSON safely with response.json()', 'Handle pagination using page number, cursor, or next link', 'Set timeout values explicitly for network calls', 'Retry transient failures with backoff', 'Handle rate limits and 429 responses', 'Use environment variables for API keys and tokens', 'Normalize nested API payloads before writing output', 'Save raw API responses before transformation when needed'] },
      { title: 'DE-style ingestion patterns', items: ['Read from API → validate → clean → write to CSV/JSON/Parquet', 'Build reusable extract(), transform(), load() functions', 'Track watermark / last updated timestamp for incremental pulls', 'Normalize nulls, blanks, and missing keys consistently', 'Safe type casting for ints, floats, booleans, and datetimes', 'Basic logging for file names, record counts, and failures', 'Use temporary output files before final write/rename', 'Keep ingestion scripts idempotent where possible'] }
    ]
  },
  {
    id: 'python-edge-cases', cat: 'python', tag: 'Python', tagClass: 't-python',
    title: 'Python — edge cases and production patterns',
    subs: [
      { title: 'Failure scenarios to practice', items: ['Missing file path or incorrect extension', 'Empty CSV / JSON file handling', 'Malformed CSV rows and delimiter issues', 'Bad JSON payload or invalid structure', 'Missing required columns in a file', 'Unexpected nulls in critical fields', 'Invalid date formats during parsing', 'API key missing from environment variables', 'Timeouts, connection resets, and partial API failures', 'Duplicate records arriving from source systems'] },
      { title: 'Robustness patterns', items: ['try/except around I/O with helpful messages', 'Validate schema before processing records', 'Skip bad rows but log them for review', 'Use chunked processing for large CSVs with pandas', 'Use generators for memory-efficient file iteration', 'Batch API calls when endpoints allow it', 'Retry only retryable failures, not every exception', 'Write logs for success, failure, and row counts', 'Guard against overwriting output accidentally', 'Add simple tests for transform logic and edge cases'] },
      { title: 'Practice scenarios', items: ['Read a large log file and count events safely', 'Call a paginated API and combine all pages', 'Flatten nested JSON to a tabular structure', 'Merge two CSV files on a business key', 'Detect and remove duplicates from raw data', 'Build an incremental loader using last_updated timestamp', 'Validate rows before writing a clean output file', 'Compare two files and find changed records', 'Parse compressed .gz data into a DataFrame', 'Create a mini ingestion script: API → clean → output'] }
    ]
  }
];
